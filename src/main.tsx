import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
//import { registerSW } from "virtual:pwa-register";
import { UpdatePrompt } from "./components/UpdatePrompt.tsx";
import { Posts } from "./components/Posts.tsx";
import UserProfile from "./components/UserProfile.tsx";

//registerSW({ immediate: true });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProfile />
    <App />
    <Posts />
    <UpdatePrompt />
  </StrictMode>,
);
