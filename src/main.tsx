import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Toaster } from "sonner";
import { UnloadProvider } from "./provider/UnloadProvider.tsx";
const message =
  "Are you sure you want to leave? Your changes may not be saved.";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <UnloadProvider message={message}>
        <RouterProvider router={router} />
      </UnloadProvider>
      <Toaster richColors position="top-right" duration={1000} />
    </Provider>
  </React.StrictMode>
);
