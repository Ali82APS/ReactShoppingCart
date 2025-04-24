import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8001"
})


export async function getProduct(){
  const {data} = await client("/products")
  return data
  // http://localhost:8001/products
}