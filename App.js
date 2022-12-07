import 'react-toastify/dist/ReactToastify.css'
import './assets/scss/webLayout.scss'
import React, { useEffect } from 'react'
import { useClearCache } from 'react-clear-cache'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import User from 'layouts/User'
import Login from 'presentation/Login'
import Register from 'presentation/Register'
import { ToastContainer } from 'react-toastify'
import Loader from 'shared/Loader'
// import Home from 'WebLayout/Home'
// import About from 'WebLayout/About'
// import ProductFeature from 'WebLayout/Product/ProductFeature'
// import Contact from 'WebLayout/Contact'

import ChangePassword from 'presentation/ChangePassword'
import ResetPassword from 'presentation/ResetPassword'
import { loadStateFn } from 'utils/localStorage'
import { useSelector } from 'react-redux'

const App = () => {
  const { isLatestVersion, emptyCacheStorage } = useClearCache()
  const loginDetail = useSelector((state) => state.auth.loginDetail)

  const token = loadStateFn('token')

  useEffect(() => {
    if (!isLatestVersion) {
      emptyCacheStorage()
    }
  }, [isLatestVersion])

  const url = `/reset-password/:any`

  return (
    <>
      <BrowserRouter>
        <Loader />
        <Switch>
          {/* <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/product-features" exact component={ProductFeature} />
          <Route path="/contact" exact component={Contact} /> */}
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/" exact component={Login} />
          <Route path={url} component={ResetPassword} />
          <Route path="/change-password" component={ChangePassword} />
          <Route path="/register" component={Register} />
          <Route
            path="/"
            render={(props) =>
              loginDetail.token || token ? (
                <User {...props} />
              ) : (
                <Redirect from="/" to="/" />
              )
            }
          />
          <Redirect from="/" to="/admin/index" />
        </Switch>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App
