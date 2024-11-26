import React, { useEffect, useState } from "react"
import { ReactNode } from "react"
import Product from "../interfaces/Product"
import axios from "axios"
import ProductContextType from "../interfaces/ProductContextType"
const { VITE_BASE_URI } = import.meta.env

export const ProductContext = React.createContext<ProductContextType>(
  {} as ProductContextType
)

const ProductContextProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([])

  const getProducts = async () => {
    const res = await axios.get(VITE_BASE_URI + "product")
    setProducts(res.data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <ProductContext.Provider value={{ products, getProducts }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider
