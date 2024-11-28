import { useContext } from "react"
import Product from "../../../interfaces/Product"
import ButtonArea from "../../buttons/ButtonArea"
import { ModalContext } from "../../../contexts/ModalContext"

const DeleteProduct = ({ product }: { product: Product }) => {
  const { closeModal } = useContext(ModalContext)
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
            onClick: () => console.log("Delete product"),
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
