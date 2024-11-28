import { MdDelete } from "react-icons/md"
import BaseButton from "./BaseButton"
import { useContext } from "react"
import { ModalContext } from "../../contexts/ModalContext"
import DeleteProduct from "../modal/modalComponents/DeleteProduct"
import Product from "../../interfaces/Product"
import { IconBaseProps } from "react-icons"

const DeleteProductButton = ({ product }: { product: Product }) => {
  const { setModalComponent, setModalTitle } = useContext(ModalContext)
  return (
    <BaseButton
      icon={(props?: IconBaseProps) => <MdDelete {...props} />}
      onClick={() => setModalComponent(<DeleteProduct product={product} />)}
      type={"button"}
      className="bg-red-500 text-white"
    />
  )
}
export default DeleteProductButton
