import React from 'react'
import Header from 'shared/Header'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import CustomButton from 'shared/Button'
import CustomTextField from 'shared/CustomInputfield'
import index from 'containers/changePassword'
import { NavLink } from 'react-router-dom'
import logo from '../assets/img/brand/logo3.png'

const ChangePassword = () => {
  const { userData, handleChange, handleSubmit } = index()
  return (
    <div className="login-wrap main-content login-wrap d-flex align-items-center">
      <Container className="py-5 m-auto">
        <Row className="justify-content-center">
          <Col lg="5" md="7">
            <Card className="bg-white shadow border-0">
              <CardHeader className="bg-transparent text-center pb-3 border-0">
                <Header>
                  <NavLink to="/user/courses">
                    <img src={logo} alt="logo" className="sign-up" />
                  </NavLink>
                  <div className="text-center">Change Password</div>
                </Header>
              </CardHeader>
              <CardBody className="p-4">
                <form onSubmit={handleSubmit}>
                  <CustomTextField
                    type="password"
                    placeholder="Enter old password"
                    name="oldPassword"
                    className="standard-input"
                    onChange={handleChange}
                    errorMessage={
                      userData.formErrors && userData.formErrors.oldPassword
                    }
                  />
                  <CustomTextField
                    type="password"
                    placeholder="Enter new password"
                    name="newPassword"
                    className="standard-input"
                    onChange={handleChange}
                    errorMessage={
                      userData.formErrors && userData.formErrors.newPassword
                    }
                  />
                  <div className="text-center pt-4">
                    <CustomButton
                      gradient
                      type="submit"
                      extraClassName="rounded-button shadow-none mb-2"
                    >
                      Continue
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
  )
}
export default ChangePassword
