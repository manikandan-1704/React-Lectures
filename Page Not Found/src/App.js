import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import './App.css';
import { Home } from "./components/Home";
import { ProductList } from "./components/ProductList";
import { ProductDetail } from "./components/ProductDetail";
import { Contact } from "./components/Contact";
import { Admin } from "./components/Admin";
import { PageNotFound } from "./components/PageNotFound";

function App() {
  const user = false;

  return (
    <div className="App">
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="admin" element={user ? <Admin /> : <Navigate to = "/" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
