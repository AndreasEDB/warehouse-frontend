import { IconBaseProps } from "react-icons"
import BaseButton from "./BaseButton"
import { MdDelete } from "react-icons/md"
import DeleteProductAttribute from "../modal/modalComponents/DeleteProductAttribute"
import { ModalContext } from "../../contexts/ModalContext"
import { useContext } from "react"
import UpdateCreateAttributeProps from "../../interfaces/UpdateCreateAttributeProps"

const DeleteAttributeButton = ({
  attribute,
  attributes,
  setAttributes,
}: UpdateCreateAttributeProps) => {
  const { setModalComponent } = useContext(ModalContext)
  return (
    <BaseButton
      icon={(props?: IconBaseProps) => <MdDelete {...props} />}
      onClick={() =>
        setModalComponent(
          <DeleteProductAttribute
            attribute={attribute}
            attributes={attributes}
            setAttributes={setAttributes}
          />
        )
      }
      type={"button"}
      className="bg-red-500 text-white"
    />
  )
}
export default DeleteAttributeButton
