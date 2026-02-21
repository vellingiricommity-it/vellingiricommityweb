import { api } from "../../../shared/services/api"
import type { MessageResponse } from "../types"

export const getMessage = async (): Promise<MessageResponse> => {
  const res = await api.get("/message")
  return res.data
}

