import { Route, Routes } from 'react-router-dom'
import './App.css'
import MessagePage from "./features/message/MessagePage"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MessagePage />} />
    </Routes>
  )
}
