import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeContainer from './home.container'
import LoginRegisterContainer from './login.register.container'
import VerifyRegisterAccountContainer from './verify.register.account.container'
import ForgotPasswordContainer from './forgot.password.container'
import ProductDetailContainer from './product.detail.container'
import ProfileContainer from './profile.container'
import CartContainer from './cart.container'
import VerifyPaymentContainer from './verify.payment.container'
import HistoryPurchase from './history.purchase.container'
const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={HomeContainer} />
      <Route exact path='/login_register' component={LoginRegisterContainer} />
      <Route exact path='/confirm/:token' component={VerifyRegisterAccountContainer} />
      <Route exact path='/forgotpass/' component={ForgotPasswordContainer} />
      <Route exact path='/product/:id' component={ProductDetailContainer} />
      <Route exact path='/profile/:email' component={ProfileContainer} />
      <Route exact path='/cart' component={CartContainer} />
      <Route exact path='/payment/:token' component={VerifyPaymentContainer} />
      <Route exact path='/purchase_history' component={HistoryPurchase} />
    </Switch>
  </Router>
)

export default App;
