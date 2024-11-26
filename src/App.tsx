import MainLayout from "./components/layouts/MainLayout"
import ProductTable from "./components/tables/ProductTable"

const App = () => {
  return (
    <MainLayout>
      <>
        <h1>Products</h1>
        <ProductTable />
      </>
    </MainLayout>
  )
}

export default App
