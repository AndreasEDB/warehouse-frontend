import { useContext } from "react"
import DataTable, { TableColumn } from "react-data-table-component"
import ProductContextType from "../../interfaces/ProductContextType"
import { ProductContext } from "../../contexts/ProductContext"
import Product from "../../interfaces/Product"
import SidebarContextType from "../../interfaces/SidebarContextType"
import { SidebarContext } from "../../contexts/SidebarContext"
import SidebarProduct from "../sidebar/sidebarComponents/SidebarProduct"
import DeleteProductButton from "../buttons/DeleteButton"

const ProductTable = () => {
  const { products } = useContext<ProductContextType>(ProductContext)
  const { setSidebarComponent } = useContext<SidebarContextType>(SidebarContext)

  const columns: TableColumn<Product>[] = [
    {
      name: "Product Number",
      selector: (row: Product) => row.productNumber,
      sortable: true,
      width: "10rem",
    },
    {
      name: "Name",
      selector: (row: Product) => row.name,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row: Product) => row.description,
      sortable: true,
    },
    {
      name: "Stock Quantity",
      selector: (row: Product) => row.stockQuantity,
      sortable: true,
      right: true,
    },
    {
      cell: (row: Product) => <DeleteProductButton product={row} />,
      right: true,
    },
  ]

  return (
    <DataTable
      columns={columns}
      data={products}
      pointerOnHover
      pagination
      responsive
      highlightOnHover
      onRowClicked={(row: Product) =>
        setSidebarComponent(<SidebarProduct product={row} />)
      }
    />
  )
}

export default ProductTable
