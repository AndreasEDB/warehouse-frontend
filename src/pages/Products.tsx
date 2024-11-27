import { useContext } from "react"
import SidebarProduct from "../components/sidebar/sidebarComponents/SidebarProduct"
import ProductTable from "../components/tables/ProductTable"
import { SidebarContext } from "../contexts/SidebarContext"

const Products = () => {
  const { setSidebarComponent } = useContext(SidebarContext)
  return (
    <>
      <h1 className="text-3xl text-center mt-3 mb-7">Products</h1>
      <div className="flex justify-center">
        <button
          className="text-white font-bold py-2 px-4 rounded bg-blue-500 hover:bg-blue-700"
          onClick={() => setSidebarComponent(<SidebarProduct product={null} />)}
        >
          Add Product
        </button>
      </div>
      <ProductTable />
    </>
  )
}
export default Products
