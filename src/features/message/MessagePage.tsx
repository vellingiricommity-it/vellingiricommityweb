import { useState } from "react"
import { getMessage } from "./api/getMessage"

export default function MessagePage() {
    
  const [message, setMessage] = useState("")

  const handleClick = async () => {
    const data = await getMessage()
    setMessage(data.text)
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