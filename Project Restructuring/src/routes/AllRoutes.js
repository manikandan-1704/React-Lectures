import { Routes, Route, Navigate } from "react-router-dom";
import { Home, ProductList, ProductDetail, Contact, Admin, PageNotFound, ContactIn, ContactUs, ContactEu } from "../pages/index";

export const AllRoutes = () => {
    const user = true;
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="products" element={<ProductList />} />
                <Route path="products/:id" element={<ProductDetail />} />
                <Route path="contact" element={<Contact />} >
                    <Route path="in" element={<ContactIn />} />
                    <Route path="us" element={<ContactUs />} />
                    <Route path="eu" element={< ContactEu />} />
                </Route>
                <Route path="admin" element={user ? <Admin /> : <Navigate to="/" />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}
