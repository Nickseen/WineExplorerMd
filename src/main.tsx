import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";
import { registerSW } from "virtual:pwa-register";

// Когда Service Worker обнаруживает новую версию сборки — страница
// автоматически обновляется. Пользователи всегда видят актуальные данные.
registerSW({
  onNeedRefresh() {
    // skipWaiting уже установлен — SW сам возьмёт управление,
    // здесь просто перезагружаем страницу чтобы загрузить новый бандл.
    window.location.reload();
  },
  onOfflineReady() {
    // Сайт готов к работе офлайн (опционально)
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
