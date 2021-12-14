import { useState } from "react"
import { ethers } from "ethers"
import "./App.css"
import Greeter from "./artifacts/contracts/Greeter.sol/Greeter.json"

const greeterAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

const App = () => {
  const [greeting, setGreetingValue] = useState()

  const requestAccount = async () => {
    await window.ethereum.request({ method: "eth_request" })
  }

  const fetchGreeting = async () => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(
        greeterAddress,
        Greeter.abi,
        provider
      )
      try {
        const data = await contract.greet()
        console.log("data: ", data)
      } catch (err) {
        console.log("Error: ", err)
      }
    }
  }

  const setGreeting = async () => {
    if (!greeting) return
    if (typeof window.ethereum !== "undefined") {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const transaction = await contract.setGreeting(greeting)
      await transaction.wait()
      fetchGreeting()
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchGreeting}>Fetch Greeting</button>
        <button onClick={setGreeting}>Fetch Greeting</button>
        <input
          onChange={(e) => setGreetingValue(e.target.value)}
          placeholder="Set greeting"
        />
      </header>
    </div>
  )
}

export default App
