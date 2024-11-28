import ProductAttribute from "./ProductAttribute"

export default interface UpdateCreateAttributeProps {
  attribute?: ProductAttribute
  attributes: ProductAttribute[]
  setAttributes: (productAttributes: ProductAttribute[]) => void
}
