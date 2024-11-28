import { useContext } from "react"
import { ModalContext } from "../../../contexts/ModalContext"
import ButtonArea from "../../buttons/ButtonArea"
import UpdateCreateAttributeProps from "../../../interfaces/UpdateCreateAttributeProps"

const DeleteProductAttribute = ({
  attribute,
  attributes,
  setAttributes,
}: UpdateCreateAttributeProps) => {
  const { closeModal } = useContext(ModalContext)

  const handleDelete = () => {
    setAttributes(attributes.filter((attr) => attr !== attribute))
    closeModal()
  }
  return (
    <div className="text-center">
      <h2 className="text-xl">
        Do you wish to delete{" "}
        <strong>
          {attribute!.key}: {attribute!.value}
        </strong>
        ?
      </h2>
      <br />
      <br />
      <strong>This will finally take effect when the product is saved.</strong>
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
export default DeleteProductAttribute
