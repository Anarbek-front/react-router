import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import RootLayout from './layout/RootLayout'
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './components/contact/ContactInfo'
import ContactForm from './components/contact/ContactForm'

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="about" element={<About />} />
                <Route path="contacts" element={<ContactLayout />}>
                    <Route path="info" element={<ContactInfo />} />
                    <Route path="form" element={<ContactForm />} />
                </Route>
            </Route>
        )
    )
    return <RouterProvider router={router}></RouterProvider>
}

export default App
