import { useState } from "react"
import { getMessage } from "./api/getMessage"

export default function MessagePage() {

  const [message, setMessage] = useState("")

  const handleClick = async () => {
  try {
    const data = await getMessage()
    setMessage(data.text)
  } catch (error) {
    console.log("API not available yet",error)
    setMessage("API not connected yet"+error)
  }
}

  return (
    <div style={{ padding: 40 }}>
      <h1>Vellingiri Commity Web App</h1>

      <button onClick={handleClick}>
        Load message from API
      </button>

      <p>{message}</p>
    </div>
  )
}