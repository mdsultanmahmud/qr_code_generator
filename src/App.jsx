import GenerateQR from "./components/GenerateQR"
import ReadQR from "./components/ReadQR"

function App() {
  return (<>
    <h1 className="text-3xl text-red-500 font-bold my-12 text-center uppercase">QR code Generate or Read</h1>
    <div className="grid gap-x-12 gap-y-4 grid-cols-1 lg:grid-cols-2 p-4">
      <GenerateQR />
      <ReadQR />
    </div>
  </>)
}

export default App
