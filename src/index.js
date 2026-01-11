import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <GoogleOAuthProvider clientId="492798288378-80djc6sg7quo3ij93ealcdr2ia1jdlmg.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
