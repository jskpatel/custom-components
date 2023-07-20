import api from "../../api/api"
import http from "../../api/http"

export const getProducts = async() => {
  const response = await http.get(api.reactSelect.get)

  const data = await response.data
  console.log(data)

}