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
  const [attributeKeys, setAttributeKeys] = useState<string[]>([])
  const [attributeValues, setAttributeValues] = useState<string[]>([])

  const getProducts = async (): Promise<boolean> => {
    const res = await axios.get(VITE_BASE_URI + "product")
    if (res.status >= 200 && res.status < 300) {
      setProducts(res.data)
      return true
    } else return false
  }

  const createProduct = async (product: Product): Promise<boolean> => {
    const res = await axios.post(VITE_BASE_URI + "product", product)
    if (res.status >= 200 && res.status < 300) {
      await getProducts()
      return true
    } else {
      console.log(res)
      return false
    }
  }

  const updateProduct = async (product: Product): Promise<boolean> => {
    const res = await axios.put(
      `${VITE_BASE_URI}product/${product.id}`,
      product
    )
    if (res.status >= 200 && res.status < 300) {
      await getProducts()
      return true
    } else {
      console.log(res)
      return false
    }
  }

  const deleteProduct = async (id: number): Promise<boolean> => {
    const res = await axios.delete(`${VITE_BASE_URI}product/${id}`)
    if (res.status >= 200 && res.status < 300) {
      await getProducts()
      return true
    } else {
      console.log(res)
      return false
    }
  }

  const getAttributeKeys = async (): Promise<boolean> => {
    const res = await axios.get(VITE_BASE_URI + "productattribute/key")
    if (res.status >= 200 && res.status < 300) {
      setAttributeKeys(res.data)
      return true
    } else return false
  }

  const getAttributeValues = async (): Promise<boolean> => {
    const res = await axios.get(VITE_BASE_URI + "productattribute/value")
    if (res.status >= 200 && res.status < 300) {
      setAttributeValues(res.data)
      return true
    } else return false
  }

  useEffect(() => {
    getProducts()
    getAttributeKeys()
    getAttributeValues()
  }, [])

  return (
    <ProductContext.Provider
      value={{
        products,
        attributeKeys,
        attributeValues,
        getAttributeKeys,
        getAttributeValues,
        getProducts,
        createProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider
