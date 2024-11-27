import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainLayout from "./components/layout/MainLayout"
import Products from "./pages/Products"
import ProductAttributes from "./pages/ProductAttributes"

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route
            path="/"
            element={<Products />}
          />
          <Route
            path="/productattributes"
            element={<ProductAttributes />}
          />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
