import Product from "./Product";

export default interface ProductContextType {
    products: Product[]
    getProducts: () => void
}