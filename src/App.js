import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddService from './pages/AddService/AddService';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import MyOrder from './pages/MyOrder/MyOrder';
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
    {/* < PrivateRoute path='/orderPlace/:serviceId'> 
    <OrderPlace></OrderPlace>
    </PrivateRoute> */}
    <PrivateRoute path='/orderPlace/:serviceId'>
      <OrderPlace></OrderPlace>
    </PrivateRoute>

      </Switch>
      <Footer></Footer>
    </Router>
        </AuthProvider>
  

    </div>
  );
}


export default App;