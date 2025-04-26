import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8001"
})


export async function getProducts(){
  const {data} = await client("/products")
  return data
  // http://localhost:8001/products
}

export async function getProduct(id: string|number) {
  const {data} = await client(`/products/${id}`)

  return data
}