import { useContext } from "react"
import ProductAttribute from "../../../interfaces/ProductAttribute"
import UpdateCreateAttributeProps from "../../../interfaces/UpdateCreateAttributeProps"
import ButtonArea from "../../buttons/ButtonArea"
import { ModalContext } from "../../../contexts/ModalContext"
import { ProductContext } from "../../../contexts/ProductContext"

const UpdateCreateAttribute = ({
  attribute,
  attributes,
  setAttributes,
}: UpdateCreateAttributeProps) => {
  const { closeModal } = useContext(ModalContext)
  const { attributeKeys, attributeValues } = useContext(ProductContext)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    let attrIndex: number = attributes.indexOf(attribute!)

    const formData: FormData = new FormData(e.target as HTMLFormElement)

    const newAttribute: ProductAttribute = {
      key: formData.get("key") as string,
      value: formData.get("value") as string,
    }

    let newAttributes: ProductAttribute[] = []

    if (attrIndex === -1) {
      newAttributes = [...attributes, newAttribute]
    } else {
      newAttributes = attributes.slice()
      newAttributes[attrIndex] = newAttribute
    }

    setAttributes(newAttributes)
    closeModal()
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="block text-sm font-medium text-gray-700">Key</label>
        <input
          type="text"
          name="key"
          list="keys"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          defaultValue={attribute?.key}
        />
        <datalist id="keys">
          {attributeKeys.sort().map((key) => (
            <option
              key={key}
              value={key}
            />
          ))}
        </datalist>
      </div>
      <div className="form-group">
        <label className="block text-sm font-medium text-gray-700">Value</label>
        <input
          type="text"
          name="value"
          list="values"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          defaultValue={attribute?.value}
        />
        <datalist id="values">
          {attributeValues.sort().map((value) => (
            <option
              key={value}
              value={value}
            />
          ))}
        </datalist>
      </div>
      <ButtonArea
        buttons={[
          {
            text: "Save",
            type: "submit",
            className: "bg-green-500",
            onClick: () => {},
          },
          {
            text: "Cancel",
            type: "button",
            className: "bg-red-500",
            onClick: closeModal,
          },
        ]}
      />
    </form>
  )
}
export default UpdateCreateAttribute
