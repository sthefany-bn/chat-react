import { IMessageData, IMessageForm } from "interfaces/message.interface";
import api from "services/api";

class MessageData {
  index() {
    return api.get<IMessageData[]>('/filmes')
  }
  store(data: IMessageForm) {
    return api.post(`/filmes`, data)
  }
  show(id: number) {
    return api.get<IMessageData>(`/filmes/${id}`)
  }
  update(id: number, data: IMessageForm) {
    return api.put(`/filmes/${id}`, data)
  }
  destroy(id: number) {
    return api.delete(`/filmes/${id}`)
  }
}

export default new MessageData()
