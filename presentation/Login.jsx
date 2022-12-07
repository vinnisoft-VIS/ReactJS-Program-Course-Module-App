import React, { useState } from 'react'
import index from 'containers/loginContainer'
import Header from 'shared/Header'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import CustomButton from 'shared/Button'
import CustomTextField from 'shared/CustomInputfield'
import { Link } from 'react-router-dom'
import forgotPasswordContainer from 'containers/loginContainer/forgotPasswordContainer'
import logo from '../assets/img/brand/logo3.png'

const Login = () => {
  const [forgotPass, setForgotPassOpen] = useState(false)
  const toggle = () => {
    setForgotPassOpen(true)
  }
  const loginToggle = () => {
    setForgotPassOpen(false)
  }
  const { handleSubmit, handleChange, userData } = index()
  const { userEmail, emailChange, sendEmail } = forgotPasswordContainer()

  return (
    <div className="login-wrap main-content login-wrap d-flex align-items-center">
      <Container className="py-5 m-auto">
        <Row className="justify-content-center">
          <Col lg="5" md="7">
            {!forgotPass ? (
              <Card className="bg-white shadow border-0">
                <CardHeader className="bg-transparent text-center pb-3 border-0">
                  <Header>
                    <a href="https://www.myturbocourse.com">
                      <img src={logo} alt="logo" className="sign-up" />
                    </a>
                    <div className="text-center">Sign In</div>
                  </Header>
                </CardHeader>
                <CardBody className="p-4">
                  <form onSubmit={handleSubmit}>
                    <CustomTextField
                      type="text"
                      placeholder="Email"
                      name="email"
                      className="standard-input"
                      onChange={handleChange}
                      value={userData.email}
                      errorMessage={
                        userData.formErrors && userData.formErrors.email
                      }
                    />
                    <CustomTextField
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="standard-input"
                      onChange={handleChange}
                      value={userData.password}
                      errorMessage={
                        userData.formErrors && userData.formErrors.password
                      }
                    />
                    <div
                      className="forgot-password"
                      aria-hidden="true"
                      onClick={toggle}
                    >
                      <small>Forgot Password ?</small>
                    </div>
                    <div className="text-center pt-4">
                      <CustomButton
                        gradient
                        type="submit"
                        extraClassName="rounded-button shadow-none mb-2"
                      >
                        Sign in
                        <i className="fas fa-arrow-right  ml-2"></i>
                      </CustomButton>
                    </div>
                  </form>
                </CardBody>
              </Card>
            ) : (
              <Card className="bg-white shadow border-0">
                <CardHeader className="bg-transparent text-center pb-3 border-0">
                  <Header>
                    <Link to="/">
                      <img src={logo} alt="logo" className="sign-up" />
                    </Link>
                    <div className="text-center">Forgot Password</div>
                  </Header>
                </CardHeader>
                <CardBody className="p-4">
                  <form onSubmit={sendEmail}>
                    <CustomTextField
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={emailChange}
                      className="standard-input"
                      value={userEmail.email}
                      errorMessage={
                        userEmail.formErrors && userEmail.formErrors.email
                      }
                    />
                    <p className="email_text">
                      Enter your register email to get reset password link
                    </p>
                    <div className="text-center pt-4">
                      <CustomButton
                        gradient
                        type="submit"
                        extraClassName="rounded-button shadow-none mb-2"
                      >
                        Send Mail
                        <i className="fas fa-arrow-right  ml-2"></i>
                      </CustomButton>
                      <p>
                        <small>
                          Return to{' '}
                          <span
                            className="text-blue cursor-pointer"
                            aria-hidden="true"
                            onClick={loginToggle}
                          >
                            Sign in
                          </span>
                        </small>
                      </p>
                    </div>
                  </form>
                </CardBody>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Login
