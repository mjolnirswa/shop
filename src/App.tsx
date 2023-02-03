import { Route, Routes } from "react-router-dom"; 
import Layout from "./components/Layout/layout";
import Homepage from "./components/Homepage/homepage";
import Brand from "./components/Brand/brand";
import Shop from "./components/Shop/shop";
import Contacts from "./components/contacts/contacts";
import Busket from "./components/Busket/Busket";
import SuccessOrder from "./components/successOrder/successOrder";
import ItemPage from "./components/ItemPage/item-page";
import User from "./components/User/user";
import Login from "./components/Login/login";
import Register from "./Register/reg";

const App: React.FC = () => {
    return( 
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Homepage />}/>
                    <Route path="shop" element={<Shop />}/>
                    <Route path="shop/:id" element={<ItemPage />}/>
                    <Route path="brand" element={<Brand />}/>
                    <Route path="contacts" element={<Contacts />}/>
                    <Route path="basket" element={<Busket />}/>
                    <Route path="order" element={<SuccessOrder />}></Route>
                    <Route path="user/:id" element={<User />}/>
                    <Route path="login" element={<Login />}/>
                    <Route path="register" element={<Register />}/>    
                </Route>
            </Routes>
    );
}

export default App;