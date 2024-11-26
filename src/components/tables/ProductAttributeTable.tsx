import DataTable, { TableColumn } from "react-data-table-component"
import ProductAttribute from "../../interfaces/ProductAttribute"

const ProductAttributeTable = ({
  productAttributes,
}: {
  productAttributes: ProductAttribute[]
}) => {
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
      right: true,
    },
  ]

  return (
    <DataTable
      columns={columns}
      data={productAttributes}
      pagination
      dense
    />
  )
}
export default ProductAttributeTable
