import Product from "../../../interfaces/Product"

const DeleteProduct = ({ product }: { product: Product }) => {
  return <div>Delete {product.name}?</div>
}
export default DeleteProduct
