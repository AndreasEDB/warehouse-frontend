import Product from "./Product"

export default interface ProductContextType {
  products: Product[]
  attributeKeys: string[]
  attributeValues: string[]
  getProducts: () => Promise<boolean>
  createProduct: (product: Product) => Promise<boolean>
  updateProduct: (product: Product) => Promise<boolean>
  deleteProduct: (id: number) => Promise<boolean>
  getAttributeKeys: () => Promise<boolean>
  getAttributeValues: () => Promise<boolean>
}
