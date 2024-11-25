import { useEffect, useState } from "react"
const { BASE_URL } = import.meta.env

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(BASE_URL + 'products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  let productMap = products.map((product: any) => {
    return (
      <div key={product.id}>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
    )
  })


  return (
    <>
    <h1>Products</h1>
    {products.map((product: any) => {
    return (
      <div key={product.id}>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </div>
    )
  })}
    </>
  )
}

export default App