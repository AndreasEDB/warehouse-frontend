import { useContext } from "react"
import Product from "../../../interfaces/Product"
import ButtonArea from "../../buttons/ButtonArea"
import { ModalContext } from "../../../contexts/ModalContext"
import { ProductContext } from "../../../contexts/ProductContext"

const DeleteProduct = ({ product }: { product: Product }) => {
  const { closeModal } = useContext(ModalContext)
  const { deleteProduct } = useContext(ProductContext)

  const handleDelete = async () => {
    await deleteProduct(product.id!)
    closeModal()
  }

  return (
    <div className="text-center">
      <h2 className="text-xl">Do you wish to delete {product.name}?</h2>
      <em>Product number: {product.productNumber}</em>
      <br />
      <br />
      <strong>This is permanent and cannot be undone!</strong>
      <br />
      <br />
      <ButtonArea
        buttons={[
          {
            text: "Delete",
            className: "bg-red-500 text-white",
            onClick: handleDelete,
            type: "button",
          },
          {
            text: "Cancel",
            className: "bg-gray-500 text-white",
            onClick: closeModal,
            type: "button",
          },
        ]}
      />
    </div>
  )
}
export default DeleteProduct
