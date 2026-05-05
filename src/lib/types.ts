export type Region = "Codru" | "Stefan Voda" | "Valul lui Traian" | "Other";
export type WineType = "red" | "white" | "rose" | "sparkling";
export type Body = "light" | "medium" | "full";
export type Sweetness = "dry" | "semi-dry" | "semi-sweet" | "sweet";
export type SubmissionStatus = "pending" | "approved" | "rejected" | "needs_changes";

export interface Winery {
  id: string;
  name: string;
  region: Region;
  city: string;
  description: string;
  priceLevel: "$" | "$$" | "$$$";
  rating: number;
  liked: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface Wine {
  id: string;
  wineryId: string | null;
  name: string;
  type: WineType;
  grapeVariety: string;
  year: number;
  price: number;
  region: Region;
  body: Body;
  sweetness: Sweetness;
  aromaNotes: string[];
  servingTemp: string;
  alcoholPercent: number;
  pairingTags: string[];
  imagePath?: string;
  liked: boolean;
  sourceType: "seed" | "user" | "producer-approved";
  createdAt: number;
  updatedAt: number;
}

export interface PairingSection {
  id: string;
  title: string;
  description: string;
  recommendedWineIds: string[];
  colorToken: string;
  iconKey: string;
  order: number;
  pinned: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface ProducerSubmission {
  id: string;
  producerName: string;
  contactInfo: string;
  wineName: string;
  wineType: WineType;
  grapeVariety: string;
  year: number;
  price: number;
  region: Region;
  sweetness: Sweetness;
  body: Body;
  alcoholPercent: number;
  aromaNotes: string[];
  suggestedPairingTags: string[];
  productionMethod: string;
  status: SubmissionStatus;
  reviewerComment: string;
  createdAt: number;
  updatedAt: number;
}

export interface Setting {
  key: "theme" | "uiPreferences";
  value: unknown;
}

export interface AppData {
  wineries: Winery[];
  wines: Wine[];
  pairings: PairingSection[];
  submissions: ProducerSubmission[];
  theme: "light" | "dark";
}
