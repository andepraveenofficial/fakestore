import { useEffect, useState } from 'react'
import axios from 'axios';

const useGetData = (url) => {

  const [productsList, setProductsList] = useState(null)

  // Methods
  const getProductsList = async () => {
    const data = await axios.get(url);
    setProductsList(data?.data)
  }

  useEffect(() => {
    getProductsList()
  }, [])

  return productsList
}

export default useGetData