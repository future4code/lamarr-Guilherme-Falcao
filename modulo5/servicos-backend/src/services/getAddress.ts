import axios from "axios";

async function getAddress(cep: string) {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
console.log(data);

    return `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
export default getAddress;

export async function getFullAddress(cep: string) {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json`);

    return `${data.cep}, ${data.numero}, ${data.complemento} ${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
