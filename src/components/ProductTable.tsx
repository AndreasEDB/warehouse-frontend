import { useContext } from "react"
import DataTable from "react-data-table-component"
import ProductContextType from "../interfaces/ProductContextType"
import {ProductContext} from "../contexts/ProductContext"
import Product from "../interfaces/Product"

const ProductTable = () => {
    const { products, getProducts } = useContext<ProductContextType>(ProductContext)

    const columns = [
        {
            name: 'ID',
            selector: (row: Product) => row.id,
            sortable: true,
        },
        {
            name: 'Product Number',
            selector: (row: Product) => row.productNumber,
            sortable: true,
        },
        {
            name: 'Name',
            selector: (row: Product) => row.name,
            sortable: true,
        },
        {
            name: 'Description',
            selector: (row: Product) => row.description,
            sortable: true,
        },
        {
            name: 'Stock Quantity',
            selector: (row: Product) => row.stockQuantity,
            sortable: true,
        },
        {
            name: 'Product Attributes',
            cell: (row: Product) => <span title={row.productAttributes.map(({key, value}) => `${key}: ${value}`).join("\n")}>{row.productAttributes.map((pa) => pa.key).join(', ')}</span>,
            sortable: true,
        }
    ]
  return (
    <DataTable columns={columns} data={products} pagination />
  )
}

export default ProductTable