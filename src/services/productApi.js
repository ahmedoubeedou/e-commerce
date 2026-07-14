import axios from "axios";
const pathUrl = "https://api.escuelajs.co/api/v1";
export async function getAllProduct()
{
let response = await axios.get(`${pathUrl}/products`);
return response.data;
}