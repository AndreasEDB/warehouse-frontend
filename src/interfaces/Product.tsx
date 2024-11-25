import ProductAttribute from "./ProductAttribute"

export default interface Product {
    id: number
    productNumber: string
    name: string
    description: string
    stockQuantity: number
    productAttributes: ProductAttribute[]
  }