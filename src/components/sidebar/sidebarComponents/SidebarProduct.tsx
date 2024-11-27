import { useContext, useEffect, useState } from "react"
import Product from "../../../interfaces/Product"
import ProductAttributeTable from "../../tables/ProductAttributeTable"
import { SidebarContext } from "../../../contexts/SidebarContext"
import SidebarContextType from "../../../interfaces/SidebarContextType"
import ProductAttribute from "../../../interfaces/ProductAttribute"
import ButtonArea from "../../buttons/ButtonArea"
import ButtonTypes from "../../../interfaces/ButtonTypes"
import axios from "axios"
import { ProductContext } from "../../../contexts/ProductContext"
const {VITE_BASE_URI} = import.meta.env

const SidebarProduct = ({ product }: { product: Product | null }) => {
  const [id, setId] = useState<number>(0)
  const [productNumber, setProductNumber] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [stockQuantity, setStockQuantity] = useState<number>(0)
  const [productAttributes, setProductAttributes] = useState<
    ProductAttribute[]
  >([])
  const { setSidebarTitle, closeSidebar } = useContext<SidebarContextType>(SidebarContext)
  const {getProducts} = useContext(ProductContext)


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newProduct: Product = {
      productNumber: productNumber,
      name: name,
      description: description,
      stockQuantity: stockQuantity,
      productAttributes: productAttributes,
    }
    if (product) newProduct.id = id

    let res

    if (product)
      res = await axios.put(`${VITE_BASE_URI}product/${id}`, newProduct)
    else
      res = await axios.post(`${VITE_BASE_URI}product`, newProduct)

    if (res.status >= 200 && res.status < 300) {
      await getProducts()
      closeSidebar()
    }
    else {
      console.log(res)
    }
  }

  useEffect(() => {
    if (product) {
      setId(product.id!)
      setProductNumber(product.productNumber)
      setName(product.name)
      setDescription(product.description)
      setStockQuantity(product.stockQuantity)
      setProductAttributes(product.productAttributes)
      setSidebarTitle(`Edit ${product.name}`)
    } else {
      setSidebarTitle("Create Product")
    }
  }, [product])

  return (
    <>
      <form
        className="space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Product Number
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={productNumber}
            onChange={e => setProductNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            rows={5}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Stock Quantity
          </label>
          <input
            type="number"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={stockQuantity}
            onChange={e => setStockQuantity(parseInt(e.target.value))}
          />
        </div>
        <div className="form-group">
          <h3 className="block text-gray-700 text-center mt-7 mb-5">
            Product Attributes
          </h3>
          <ProductAttributeTable productAttributes={productAttributes} />
        </div>
        <ButtonArea buttons={[product ? ButtonTypes.Save() : ButtonTypes.Create(), ButtonTypes.Cancel(closeSidebar)]} />
      </form>
    </>
  )
}
export default SidebarProduct
