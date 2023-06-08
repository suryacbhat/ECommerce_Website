import './App.css';
import{Routes,Route}    from 'react-router-dom';
import HomePage from './page/HomePage';
import About from './page/About';
import Contact from './page/Contact';
import Policy from './page/Policy';
import Pagenotfound from './page/Pagenotfound';
import Register from './page/Auth/Register';
import Login from './page/Auth/Login';
import Dashboard from './page/user/Dashboard';
import PrivateRoute from './componentss/Routes/Private';
import ForgotPassword from './page/Auth/ForgotPassword';
import AdminRoute from './componentss/Routes/AdminRoute';
import AdminDashboard from './page/Admin/AdminDashboard';
import CreateCategory from './page/Admin/CreateCategory';
import Orders from './page/user/Orders';
import Profile from './page/user/Profile';
import CreateProduct from './page/Admin/CreateProduct';
import Users from './page/Admin/Users';


function App() {
  return (
    <>
<Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders/>} />
          <Route path="user/profile" element={<Profile/>} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
  <Route path="admin" element={<AdminDashboard />} />
  <Route path="category" element={<CreateCategory />} />
  <Route path="product" element={<CreateProduct />} />
  <Route path="users" element={<Users />} />
</Route>


        <Route path="/Dashboard/admin/category/*" element={<CreateCategory/>} />
        <Route path="/Dashboard/admin/product/*" element={<CreateProduct/>} />
        <Route path="/Dashboard/admin/users/*" element={<Users/>} />
        <Route path="/Dashboard/admin/profile/*" element={<Profile/>} />
        <Route path="/Dashboard/admin/orders/*" element={<Orders/>} />
        
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes> 
    </>
  );
}

export default App;
