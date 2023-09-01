import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { MetaMaskProvider } from "@metamask/sdk-react"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MetaMaskProvider
      debug
      sdkOptions={{
        logging: {
          developerMode: false,
        },
        dappMetadata: {
          name: "JellyBelly",
          url: window.location.host,
        },
        checkInstallationImmediately: false,
      }}
    >
      <App />
    </MetaMaskProvider>
  </React.StrictMode>,
)
