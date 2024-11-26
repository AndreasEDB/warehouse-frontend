import { useContext } from "react"
import DataTable, { TableColumn } from "react-data-table-component"
import ProductContextType from "../../interfaces/ProductContextType"
import { ProductContext } from "../../contexts/ProductContext"
import Product from "../../interfaces/Product"
import SidebarContextType from "../../interfaces/SidebarContextType"
import { SidebarContext } from "../../contexts/SidebarContext"
import SidebarProduct from "../sidebar/sidebarComponents/SidebarProduct"

const ProductTable = () => {
  const { products } = useContext<ProductContextType>(ProductContext)
  const { setSidebarComponent } = useContext<SidebarContextType>(SidebarContext)

  // useEffect(() => {
  //     products.length && setSidebarComponent(<SidebarProduct product={products[0]} />)
  // }, [products])

  const columns: TableColumn<Product>[] = [
    {
      name: "ID",
      selector: (row: Product) => row.id,
      sortable: true,
      width: "4rem",
    },
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
    },
    // {
    //   name: "Product Attributes",
    //   cell: (row: Product) => (
    //     <span
    //       title={row.productAttributes
    //         .map(({ key, value }) => `${key}: ${value}`)
    //         .join("\n")}
    //     >
    //       {row.productAttributes.map(pa => pa.key).join(", ")}
    //     </span>
    //   ),
    //   sortable: true,
    // },
  ]
  return (
    <DataTable
      columns={columns}
      data={products}
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
