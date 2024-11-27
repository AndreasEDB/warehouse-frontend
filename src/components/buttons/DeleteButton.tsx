import { MdDelete } from "react-icons/md"
import BaseButton from "./BaseButton"
import { useContext } from "react"
import { ModalContext } from "../../contexts/ModalContext"
import DeleteProduct from "../modal/modalComponents/DeleteProduct"
import Product from "../../interfaces/Product"

const DeleteProductButton = ({ product }: { product: Product }) => {
  const { setModalComponent, setModalTitle } = useContext(ModalContext)
  return (
    <BaseButton
      icon={<MdDelete />}
      onClick={() => setModalComponent(<DeleteProduct product={product} />)}
      type={"button"}
      className="bg-red-500 text-white aspect-square flex align-center"
    />
  )
}
export default DeleteProductButton
