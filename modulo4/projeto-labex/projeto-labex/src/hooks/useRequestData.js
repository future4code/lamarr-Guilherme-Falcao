import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";

// HOOK GET
export const useRequestDataGet = (url) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(undefined);
  const [erro, setErro] = useState(undefined);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setIsLoading(false);
        setData(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        setErro(error);
      });
  }, [url]);

  return [data, isLoading, erro];
};

//HOOK POST
export const useRequestDataPost=(url)=>{
  const [data, setData] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [erro, setErro] = useState("")
  
  useEffect(() => {
      setIsLoading(true);
      axios.get(url).then(response =>{
        setIsLoading(false)
        setData(response.data)
      }).catch(error =>{
        setIsLoading(false)
        setErro(error)
      })
    }, [url])

  return [data, isLoading, erro];
};

// HOOK USEFORM
export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState)

  const onChange = (event) =>{
      const { name, value } = event.target
      setForm({...form, [name]: value})
  }

  const clear = () => {
      setForm(initialState)
  }

  return [form, onChange, clear]
};


const useProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
      const token = localStorage.getItem("token")

      if(token === null) {
          navigate("/login")
      }
  }, [navigate])
}

export default useProtectedPage