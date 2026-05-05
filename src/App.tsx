import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthModal from "./components/AuthModal";
import Layout from "./components/Layout";
import { useAppData } from "./features/useAppData";
import { useAuth } from "./features/useAuth";
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
    removeWines,
    addSubmission,
    setSubmissionStatus,
    removeSubmission
  } = useAppData();

  const { token, role, login, logout, refreshToken } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  if (loading) {
    return <main className="center-screen">Загрузка Vinaria Explorer...</main>;
  }

  return (
    <>
      {showAuthModal && (
        <AuthModal onLogin={login} onClose={() => setShowAuthModal(false)} />
      )}
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            theme={data.theme}
            onToggleTheme={() => setTheme(data.theme === "light" ? "dark" : "light")}
            role={role}
            onLoginClick={() => setShowAuthModal(true)}
            onLogout={logout}
          />
        }
      >
        <Route index element={<HomePage stats={stats} />} />
        <Route
          path="wines"
          element={<WinesPage wines={data.wines} onAdd={addWine} onToggleLike={toggleWineLike} onRemoveMany={removeWines} role={role} onLoginClick={() => setShowAuthModal(true)} token={token} />}
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
              role={role}
              onLoginClick={() => setShowAuthModal(true)}
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
        <Route
          path="submit"
          element={
            <SubmissionPage
              onSubmit={addSubmission}
              submissions={data.submissions}
              token={token}
              role={role}
              onLoginClick={() => setShowAuthModal(true)}
              onRefreshToken={refreshToken}
            />
          }
        />
        <Route
          path="review"
          element={
            <ReviewPage
              submissions={data.submissions}
              onStatusChange={setSubmissionStatus}
              onDelete={removeSubmission}
              token={token}
              role={role}
              onLoginClick={() => setShowAuthModal(true)}
              onRefreshToken={refreshToken}
            />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </>
  );
}
