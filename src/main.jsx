import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { MetaMaskProvider } from "@metamask/sdk-react"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MetaMaskProvider
      sdkOptions={{
        dappMetadata: {
          name: "JellyBelly",
          url: "https://metamask.app.link/dapp/effulgent-lollipop-b28925.netlify.app",
        },
        checkInstallationImmediately: false,
      }}
    >
      <App />
    </MetaMaskProvider>
  </React.StrictMode>,
)
