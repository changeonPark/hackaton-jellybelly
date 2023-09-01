import { MetaMaskButton, useAccount, useSDK, useSignMessage } from "@metamask/sdk-react"
import "./App.css"

function AppReady() {
  const {
    data: signData,
    isError: isSignError,
    isLoading: isSignLoading,
    isSuccess: isSignSuccess,
    signMessage,
  } = useSignMessage({
    message: "gm wagmi frens",
  })

  const { isConnected, address, status, isConnecting } = useAccount()

  return (
    <div className="App">
      <header className="App-header">
        <MetaMaskButton theme={"light"} color="white"></MetaMaskButton>
        <div className="flex flex-col gap-4">
          <div className="f">{isConnecting}</div>
          <div>status = {status}</div>
          <div>address = {address}</div>
        </div>
        {isConnected && (
          <>
            <div style={{ marginTop: 20 }}>
              <button disabled={isSignLoading} onClick={() => signMessage()}>
                Sign message
              </button>
              {isSignSuccess && <div>Signature: {signData}</div>}
              {isSignError && <div>Error signing message</div>}
            </div>
          </>
        )}
      </header>
    </div>
  )
}

function App() {
  const { ready } = useSDK()

  if (!ready) {
    return <div>Loading...</div>
  }

  return <AppReady />
}

export default App
