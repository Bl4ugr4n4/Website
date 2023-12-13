import React from 'react'
import './index.css';
import { Route, Switch, withRouter } from 'react-router-dom'

import { OrdersManagement } from './Pages/Admin/Orders/OrdersManagement'
import { Product } from './Pages/Product/Product';
import { ProductCart } from './Pages/Cart/ProductCart';

import { Orders } from './Pages/Profile/Order&Returns';
import { Profile } from './Pages/Profile/profile';
import { EditProfile } from './Pages/Profile/EditProfile';

import AdminRoute from './Routes/AdminRoute';
import { Payment } from './Pages/Payment/Payment';
import { DefaultComp } from './Pages/404';
import { AllProducts } from './Pages/AllProducts/AllProducts';
import { Footer } from './Components/Footer/Footer';
import { NotAuthorisedPage } from './Pages/403';
import { Login } from './Pages/Auth/Login/Login';
import { Signup } from './Pages/Auth/Signup/Signup';
import { Navbar } from './Components/Navbar';
import AboutUs from './Pages/AboutUs/AboutUs';
import Reviews from './Pages/Reviews/Reviews';
import { Home } from './Pages/Home/Home';

const App = () => {

  return (
    <div className="app-container">
      <div style={{ minHeight: '95vh' }}>
        <Navbar />
        <div style={{ marginTop: "130px" }}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/products' component={AllProducts} />
            <Route exact path='/about-us' component={AboutUs} />
            <Route exact path='/reviews' component={Reviews} />
            <Route exact path='/orders' component={Orders} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/profile/update/:id' component={EditProfile} />


            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/product/:id' component={Product} />
            <Route exact path='/cart' component={ProductCart} />
            <Route exact path='/checkout/payment' component={Payment} />

            <AdminRoute exact path='/admin' component={OrdersManagement} />

            <Route exact path='/no-permission' component={NotAuthorisedPage} />
            <Route component={DefaultComp} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default withRouter(App);