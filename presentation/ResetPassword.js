import React from 'react'
import Header from 'shared/Header'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import CustomButton from 'shared/Button'
import CustomTextField from 'shared/CustomInputfield'
import forgotPasswordContainer from 'containers/loginContainer/forgotPasswordContainer'
import { Link } from 'react-router-dom'
import logo from '../assets/img/brand/logo3.png'

const ResetPassword = () => {
  const { passwordObj, changePassword, handleSubmit } =
    forgotPasswordContainer()
  return (
    <>
      <div className="login-wrap main-content login-wrap d-flex align-items-center">
        <Container className="py-5 m-auto">
          <Row className="justify-content-center">
            <Col lg="5" md="7">
              <Card className="bg-white shadow border-0">
                <CardHeader className="bg-transparent text-center pb-3 border-0">
                  <Header>
                    <Link to="/">
                      <img src={logo} alt="logo" className="sign-up" />
                    </Link>
                    <div className="text-center">Reset Password</div>
                  </Header>
                </CardHeader>
                <CardBody className="p-4">
                  <form onSubmit={handleSubmit}>
                    <CustomTextField
                      type="password"
                      placeholder="New Password"
                      name="Password"
                      onChange={changePassword}
                      value={passwordObj.Password}
                      className="standard-input"
                      errorMessage={
                        passwordObj.formErrors &&
                        passwordObj.formErrors.Password.toString()
                      }
                    />
                    <CustomTextField
                      type="password"
                      placeholder="Confirm Password"
                      name="ConfirmPassword"
                      onChange={changePassword}
                      value={passwordObj.ConfirmPassword}
                      className="standard-input"
                      errorMessage={
                        passwordObj.formErrors &&
                        passwordObj.formErrors.ConfirmPassword
                      }
                    />
                    <div className="text-center pt-4">
                      <CustomButton
                        gradient
                        type="submit"
                        extraClassName="rounded-button shadow-none mb-2"
                      >
                        Reset Password
                        <i className="fas fa-arrow-right  ml-2"></i>
                      </CustomButton>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ResetPassword
