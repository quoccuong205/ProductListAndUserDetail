import './App.css';
import 'antd/dist/antd.css'
import LayoutAdmin from './PageAdmin/LayoutAdmin';
import LayoutUser from './PageUser/LayoutUser';
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Home from './PageUser/Home';
import Productpage from './PageUser/HomePageCategory';
import { Route, BrowserRouter, Routes } from 'react-router-dom' 
import Login from './Components/auth/Login';
import ProductDetail from './PageUser/ProductDetail';
import { useEffect } from 'react';
import { getCategories } from './redux/product/action';
import { useDispatch } from "react-redux"
import AppBarAdmin from './Components/AppBarAdmin';
import ProductCreatePage from './PageAdmin/ProductCreatePage';
import ProductUpdatePage from './PageAdmin/ProductUpdatePage';
import UserList from './PageAdmin/UserList';
import UserDetail from './PageAdmin/UserDetail';
import ProductList from './PageAdmin/ProductList';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutUser />}>
              <Route path="/productpage" element={<Productpage/>} />
              <Route path="/productdetail" element={<ProductDetail/>} />
              <Route path="/" element={<Home/>} />
            </Route>
            <Route path="/admin" element={<LayoutAdmin />}>
              <Route path='/admin/productlist' element={<ProductList />} />
              <Route path='/admin/createproduct' element={<ProductCreatePage />} />
              <Route path='/admin/updateproduct' element={<ProductUpdatePage />} />
              <Route path='/admin/userlist' element={<UserList />} />
              <Route path='/admin/userdetail' element={<UserDetail />} />
            </Route>
          </Routes>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
