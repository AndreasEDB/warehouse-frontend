import DataTable, { TableColumn } from "react-data-table-component"
import ProductAttribute from "../../interfaces/ProductAttribute"
import UpdateCreateAttributeProps from "../../interfaces/UpdateCreateAttributeProps"
import { useContext } from "react"
import { ModalContext } from "../../contexts/ModalContext"
import UpdateCreateAttribute from "../modal/modalComponents/UpdateCreateAttribute"
import BaseButton from "../buttons/BaseButton"
import DeleteAttributeButton from "../buttons/DeleteAttributeButton"

const ProductAttributeTable = ({
  attributes,
  setAttributes,
}: UpdateCreateAttributeProps) => {
  const { setModalComponent, setModalTitle } = useContext(ModalContext)

  const updateRow = (row: ProductAttribute) => {
    setModalTitle("Update Attribute")
    setModalComponent(
      <UpdateCreateAttribute
        attribute={row}
        attributes={attributes}
        setAttributes={setAttributes}
      />
    )
  }

  const columns: TableColumn<ProductAttribute>[] = [
    {
      name: "Key",
      selector: (row: ProductAttribute) => row.key,
      sortable: true,
    },
    {
      name: "Value",
      selector: (row: ProductAttribute) => row.value,
      sortable: true,
    },
    {
      cell: (row: ProductAttribute) => (
        <DeleteAttributeButton
          attributes={attributes}
          setAttributes={setAttributes}
          attribute={row}
        />
      ),
      right: true,
    },
  ]

  return (
    <>
      <h3 className="block text-gray-700 text-center mt-7 mb-5 flex justify-between">
        <span>Product Attributes</span>
        <BaseButton
          className="bg-blue-500 text-white"
          text="Add Attribute"
          onClick={() => updateRow({ key: "", value: "" })}
          type={"button"}
        />
      </h3>
      <DataTable
        columns={columns}
        data={attributes}
        onRowClicked={updateRow}
        pointerOnHover={true}
        pagination
        dense
      />
    </>
  )
}
export default ProductAttributeTable
