import DisplayProducts from "./components/DisplayProducts"
import FooterComponent from "./components/FooterComponent"
import HeaderComponent from "./components/HeaderComponent"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ProductComponent from "./components/ProductComponent"
function App() {

  return (
    <>
      <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<DisplayProducts />}></Route>
            <Route path="/products" element={<DisplayProducts />}></Route>
            <Route path="/createproduct" element={<ProductComponent />} ></Route>
            <Route path="/editproduct/:id" element={<ProductComponent />} ></Route>
          </Routes>
          <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
