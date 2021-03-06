import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddService from './pages/AddService/AddService';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import ManageAllService from './pages/ManageAllService/ManageAllService';
import MyOrder from './pages/MyOrder/MyOrder';
import NotFound from './pages/NotFound/NotFound';
import OrderPlace from './pages/OrderPlace/OrderPlace';
import Footer from './pages/Shared/Header/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
    <Route path='/home'>
    <Home ></Home>
    </Route>
    <Route exact path='/'>
    <Home></Home>
    </Route>
    <Route exact path='/addService'>
    <AddService></AddService>
    </Route>
    <Route path='/login'>
    <Login></Login>
    </Route>
    <Route path='/myOrder'> 
      <MyOrder></MyOrder>
    </Route>
    <Route path='/manageAllService'> 
      <ManageAllService></ManageAllService>
    </Route>
    <PrivateRoute path='/orderPlace/:serviceId'>
      <OrderPlace></OrderPlace>
    </PrivateRoute>
    <PrivateRoute path='/orderPlace'>
      <OrderPlace></OrderPlace>
    </PrivateRoute>
    <Route path='*'>
      <NotFound></NotFound>
    </Route>
      </Switch>
      <Footer></Footer>
    </Router>
        </AuthProvider>
    </div>
  );
}


export default App;