import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Mangoewimva } from "./screens/Mangoewimva";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Mangoewimva />
  </StrictMode>,
);
