import React from 'react'
import Header from 'shared/Header'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import CustomButton from 'shared/Button'
import CustomTextField from 'shared/CustomInputfield'
import { Link } from 'react-router-dom'
import index from 'containers/registerContainer'
import logo from '../assets/img/brand/logo3.png'

const Register = () => {
  const { userData, handleSubmit, handleChange, clearSignupValue } = index()
  return (
    <div className="login-wrap main-content login-wrap d-flex align-items-center">
      <Container className="py-5 m-auto">
        <Row className="justify-content-center">
          <Col lg="6" md="7">
            <Card className="bg-white border-0">
              <CardHeader className="bg-transparent text-center pb-3 border-0">
                <Header>
                  <Link to="/">
                    <img src={logo} alt="logo" className="sign-up" />
                  </Link>
                  <div className="text-center">Sign Up</div>
                </Header>
              </CardHeader>
              <CardBody className="p-4">
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col sm={6}>
                      <CustomTextField
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        onChange={handleChange}
                        value={userData.firstName}
                        className="standard-input"
                        errorMessage={
                          userData.formErrors && userData.formErrors.firstName
                        }
                      />
                    </Col>
                    <Col sm={6}>
                      <CustomTextField
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        onChange={handleChange}
                        value={userData.lastName}
                        className="standard-input"
                        errorMessage={
                          userData.formErrors && userData.formErrors.lastName
                        }
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={12}>
                      <CustomTextField
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        value={userData.email}
                        className="standard-input"
                        errorMessage={
                          userData.formErrors && userData.formErrors.email
                        }
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6}>
                      <CustomTextField
                        type="text"
                        placeholder="Institute Name"
                        name="organization"
                        onChange={handleChange}
                        value={userData.organization}
                        className="standard-input"
                        errorMessage={
                          userData.formErrors &&
                          userData.formErrors.organization
                        }
                      />
                    </Col>
                    <Col sm={6}>
                      <CustomTextField
                        type="text"
                        placeholder="Mobile"
                        name="mobile"
                        onChange={handleChange}
                        value={userData.mobile_number}
                        className="standard-input"
                        errorMessage={
                          userData.formErrors && userData.formErrors.mobile
                        }
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={6}>
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
                    </Col>
                    <Col sm={6}>
                      <CustomTextField
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        onChange={handleChange}
                        value={userData.confirmPassword}
                        className="standard-input"
                        errorMessage={
                          userData.formErrors &&
                          userData.formErrors.confirmPassword
                        }
                      />
                    </Col>
                  </Row>
                  <div className="text-center pt-4">
                    <CustomButton
                      gradient
                      type="submit"
                      extraClassName="rounded-button shadow-none mb-2"
                    >
                      Sign Up
                      <i className="fas fa-arrow-right  ml-2"></i>
                    </CustomButton>
                    <p>
                      <small>
                        or don’t have an account?{' '}
                        <Link to="/login" onClick={clearSignupValue}>
                          Sign in
                        </Link>
                      </small>
                    </p>
                  </div>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Register
