import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { useAppData } from "./features/useAppData";
import CollectionPage from "./pages/CollectionPage";
import HomePage from "./pages/HomePage";
import PairingsPage from "./pages/PairingsPage";
import ReviewPage from "./pages/ReviewPage";
import SubmissionPage from "./pages/SubmissionPage";
import WineriesPage from "./pages/WineriesPage";
import WinesPage from "./pages/WinesPage";

export default function App() {
  const {
    data,
    loading,
    stats,
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
  } = useAppData();

  if (loading) {
    return <main className="center-screen">Загрузка Vinaria Explorer...</main>;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            theme={data.theme}
            onToggleTheme={() => setTheme(data.theme === "light" ? "dark" : "light")}
          />
        }
      >
        <Route index element={<HomePage stats={stats} />} />
        <Route
          path="wines"
          element={<WinesPage wines={data.wines} onAdd={addWine} onToggleLike={toggleWineLike} onRemove={removeWine} />}
        />
        <Route
          path="wineries"
          element={
            <WineriesPage
              wineries={data.wineries}
              wines={data.wines}
              onToggleLike={toggleWineryLike}
              onAdd={addWinery}
              onRemove={removeWinery}
            />
          }
        />
        <Route
          path="pairings"
          element={
            <PairingsPage
              pairings={data.pairings}
              wines={data.wines}
              onToggleLike={toggleWineLike}
              onAdd={addPairingSection}
              onRemove={removePairingSection}
            />
          }
        />
        <Route path="collection" element={<CollectionPage wines={data.wines} onToggleLike={toggleWineLike} />} />
        <Route path="submit" element={<SubmissionPage onSubmit={addSubmission} submissions={data.submissions} />} />
        <Route
          path="review"
          element={
            <ReviewPage
              submissions={data.submissions}
              onStatusChange={setSubmissionStatus}
              onDelete={removeSubmission}
            />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
