import { useCallback, useEffect, useMemo, useState } from "react";
import {
  deletePairingSection,
  deleteSubmission,
  deleteWinery,
  deleteWine,
  ensureSeeded,
  loadAllData,
  putPairingSection,
  putSubmission,
  putTheme,
  putWine,
  putWinery
} from "../db/db";
import { AppData, ProducerSubmission, Region, SubmissionStatus, Wine, WineType, Winery } from "../lib/types";
import { apiFetchAllWines } from "../lib/api";

const blankData: AppData = {
  wineries: [],
  wines: [],
  pairings: [],
  submissions: [],
  theme: "light"
};

function newId(prefix: string) {
  return `${prefix}-${crypto.randomUUID()}`;
}

export interface SubmissionInput {
  producerName: string;
  contactInfo: string;
  wineName: string;
  wineType: WineType;
  grapeVariety: string;
  year: number;
  price: number;
  region: Region;
  sweetness: Wine["sweetness"];
  body: Wine["body"];
  alcoholPercent: number;
  aromaNotes: string[];
  suggestedPairingTags: string[];
  productionMethod: string;
}

export interface WineInput {
  name: string;
  type: WineType;
  grapeVariety: string;
  year: number;
  price: number;
  region: Region;
  body: Wine["body"];
  sweetness: Wine["sweetness"];
  aromaNotes: string[];
  servingTemp: string;
  alcoholPercent: number;
  pairingTags: string[];
  imagePath?: string;
}

export interface WineryInput {
  name: string;
  region: Region;
  city: string;
  description: string;
  priceLevel: Winery["priceLevel"];
  rating: number;
}

export interface PairingInput {
  title: string;
  description: string;
  recommendedWineIds: string[];
  colorToken: string;
  iconKey: string;
}

function normalizeText(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

export function useAppData() {
  const [data, setData] = useState<AppData>(blankData);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    const loaded = await loadAllData();
    setData(loaded);
  }, []);

  useEffect(() => {
    const boot = async () => {
      await ensureSeeded();
      await refresh();
      setLoading(false);
    };
    boot();
  }, [refresh]);

  // Polling: каждые 60 секунд подтягиваем вина с бэкенда и мёрджим новые
  useEffect(() => {
    const POLL_INTERVAL = 60_000; // 60 секунд

    const poll = async () => {
      try {
        const remoteWines = await apiFetchAllWines();
        setData((prev) => {
          const existingIds = new Set(prev.wines.map((w) => w.id));
          const newWines = remoteWines.filter((w) => !existingIds.has(w.id));
          if (newWines.length === 0) return prev;
          // Сохраняем новые вина в IndexedDB
          newWines.forEach((w) => putWine(w));
          return { ...prev, wines: [...prev.wines, ...newWines] };
        });
      } catch {
        // Бэкенд недоступен — тихо игнорируем
      }
    };

    const id = setInterval(poll, POLL_INTERVAL);
    // Первый запрос сразу при монтировании (после небольшой задержки)
    const initId = setTimeout(poll, 2000);
    return () => {
      clearInterval(id);
      clearTimeout(initId);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = data.theme;
  }, [data.theme]);

  const setTheme = useCallback(
    async (theme: "light" | "dark") => {
      await putTheme(theme);
      setData((prev) => ({ ...prev, theme }));
    },
    [setData]
  );

  const toggleWineLike = useCallback(
    async (id: string) => {
      const wine = data.wines.find((item) => item.id === id);
      if (!wine) return;
      const updated = { ...wine, liked: !wine.liked, updatedAt: Date.now() };
      await putWine(updated);
      setData((prev) => ({ ...prev, wines: prev.wines.map((item) => (item.id === id ? updated : item)) }));
    },
    [data.wines]
  );

  const removeWine = useCallback(
    async (id: string) => {
      const wine = data.wines.find((item) => item.id === id);
      if (!wine || wine.sourceType === "seed") return;
      await deleteWine(id);
      setData((prev) => ({ ...prev, wines: prev.wines.filter((item) => item.id !== id) }));
    },
    [data.wines]
  );

  const addWine = useCallback(async (input: WineInput) => {
    const now = Date.now();
    const wine: Wine = {
      id: newId("wine"),
      wineryId: null,
      name: input.name,
      type: input.type,
      grapeVariety: input.grapeVariety,
      year: input.year,
      price: input.price,
      region: input.region,
      body: input.body,
      sweetness: input.sweetness,
      aromaNotes: input.aromaNotes,
      servingTemp: input.servingTemp,
      alcoholPercent: input.alcoholPercent,
      pairingTags: input.pairingTags,
      imagePath: input.imagePath,
      liked: false,
      sourceType: "user",
      createdAt: now,
      updatedAt: now
    };

    await putWine(wine);
    setData((prev) => ({ ...prev, wines: [wine, ...prev.wines] }));
  }, []);

  const toggleWineryLike = useCallback(
    async (id: string) => {
      const winery = data.wineries.find((item) => item.id === id);
      if (!winery) return;
      const updated: Winery = { ...winery, liked: !winery.liked, updatedAt: Date.now() };
      await putWinery(updated);
      setData((prev) => ({ ...prev, wineries: prev.wineries.map((item) => (item.id === id ? updated : item)) }));
    },
    [data.wineries]
  );

  const addWinery = useCallback(async (input: WineryInput) => {
    const now = Date.now();
    const winery: Winery = {
      id: newId("winery"),
      name: input.name,
      region: input.region,
      city: input.city,
      description: input.description,
      priceLevel: input.priceLevel,
      rating: input.rating,
      liked: false,
      createdAt: now,
      updatedAt: now
    };
    await putWinery(winery);
    setData((prev) => ({ ...prev, wineries: [winery, ...prev.wineries] }));
  }, []);

  const removeWinery = useCallback(async (id: string) => {
    await deleteWinery(id);
    setData((prev) => ({ ...prev, wineries: prev.wineries.filter((item) => item.id !== id) }));
  }, []);

  const addPairingSection = useCallback(
    async (input: PairingInput) => {
      const now = Date.now();
      const nextOrder = data.pairings.length > 0 ? Math.max(...data.pairings.map((item) => item.order)) + 1 : 1;
      const section = {
        id: newId("pairing"),
        title: input.title,
        description: input.description,
        recommendedWineIds: input.recommendedWineIds,
        colorToken: input.colorToken,
        iconKey: input.iconKey,
        order: nextOrder,
        pinned: false,
        createdAt: now,
        updatedAt: now
      };
      await putPairingSection(section);
      setData((prev) => ({ ...prev, pairings: [...prev.pairings, section].sort((a, b) => a.order - b.order) }));
    },
    [data.pairings]
  );

  const removePairingSection = useCallback(async (id: string) => {
    await deletePairingSection(id);
    setData((prev) => ({ ...prev, pairings: prev.pairings.filter((item) => item.id !== id) }));
  }, []);

  const addSubmission = useCallback(async (input: SubmissionInput) => {
    const now = Date.now();
    const submission: ProducerSubmission = {
      id: newId("submission"),
      producerName: input.producerName,
      contactInfo: input.contactInfo,
      wineName: input.wineName,
      wineType: input.wineType,
      grapeVariety: input.grapeVariety,
      year: input.year,
      price: input.price,
      region: input.region,
      sweetness: input.sweetness,
      body: input.body,
      alcoholPercent: input.alcoholPercent,
      aromaNotes: input.aromaNotes,
      suggestedPairingTags: input.suggestedPairingTags,
      productionMethod: input.productionMethod,
      status: "pending",
      reviewerComment: "",
      createdAt: now,
      updatedAt: now
    };

    await putSubmission(submission);
    setData((prev) => ({ ...prev, submissions: [submission, ...prev.submissions] }));
  }, []);

  const setSubmissionStatus = useCallback(
    async (id: string, status: SubmissionStatus, comment: string) => {
      const submission = data.submissions.find((item) => item.id === id);
      if (!submission) return;

      const updatedSubmission = { ...submission, status, reviewerComment: comment, updatedAt: Date.now() };
      await putSubmission(updatedSubmission);

      const nextSubmissions = data.submissions.map((item) => (item.id === id ? updatedSubmission : item));
      let nextWines = data.wines;

      if (status === "approved") {
        const duplicate = data.wines.find(
          (wine) =>
            normalizeText(wine.name) === normalizeText(submission.wineName) &&
            wine.year === submission.year
        );

        if (!duplicate) {
          const createdWine: Wine = {
            id: newId("wine"),
            wineryId: null,
            name: submission.wineName,
            type: submission.wineType,
            grapeVariety: `${submission.grapeVariety} (${submission.producerName})`,
            year: submission.year,
            price: submission.price ?? 0,
            region: submission.region,
            body: submission.body,
            sweetness: submission.sweetness,
            aromaNotes: submission.aromaNotes,
            servingTemp: "10-16 C",
            alcoholPercent: submission.alcoholPercent,
            pairingTags: submission.suggestedPairingTags,
            liked: false,
            sourceType: "producer-approved",
            createdAt: Date.now(),
            updatedAt: Date.now()
          };
          await putWine(createdWine);
          nextWines = [createdWine, ...data.wines];
        }
      }

      setData((prev) => ({ ...prev, submissions: nextSubmissions, wines: nextWines }));
    },
    [data.submissions, data.wines]
  );

  const removeSubmission = useCallback(
    async (id: string) => {
      await deleteSubmission(id);
      setData((prev) => ({ ...prev, submissions: prev.submissions.filter((item) => item.id !== id) }));
    },
    [setData]
  );

  const stats = useMemo(
    () => ({
      wines: data.wines.length,
      wineries: data.wineries.length,
      liked: data.wines.filter((item) => item.liked).length,
      pending: data.submissions.filter((item) => item.status === "pending").length
    }),
    [data]
  );

  return {
    data,
    loading,
    stats,
    refresh,
    setTheme,
    toggleWineLike,
    addWine,
    toggleWineryLike,
    addWinery,
    removeWinery,
    addPairingSection,
    removePairingSection,
    removeWine,
    addSubmission,
    setSubmissionStatus,
    removeSubmission
  };
}
