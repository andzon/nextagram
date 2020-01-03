import React, { useState } from 'react'
import {
    NavItem,
    NavLink,
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,
    Button
} from 'reactstrap'
import LogInForm from './LogInForm'
import SignUpForm from './SignUpForm'


const AuthModal = () => {
    const [showModal, setShowModal] = useState(false)
    const [showLogin, setShowLogin] = useState(true)
    const toggleModal = () => setShowModal(!showModal)
    const toggleForm = () => setShowLogin(!showLogin)
    return (
        <>
            <NavItem>
                <NavLink onClick={toggleModal}>Login</NavLink>
            </NavItem>
            <Modal isOpen={showModal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>
                    <img
                        height="35"
                        width="47"
                        src="https://cdn.dribbble.com/users/41636/screenshots/2719580/instagram-logo-concept.jpg"
                        alt=""
                    />Reactagram
                </ModalHeader>
                <ModalBody>
                    {showLogin ? <LogInForm /> : <SignUpForm />}
                    <>
                        {showLogin ? <p style={{ fontSize: '0.9em' }}>New member?{' '}</p> : <p style={{ fontSize: '0.9em' }}>
            Already a member?{' '}</p>}
                        <a onClick={toggleForm} className="d-block" href="#">
                            {showLogin
                                ? 'Sign up'
                                : 'Log in'}
                        </a>
                    </>
                </ModalBody>
                {/* <ModalFooter>
                    {showLogin ? <Button color="primary" onClick={toggleModal}>Login</Button>
                        : <Button color="primary" onClick={toggleModal}>Sign up</Button>}
                    <Button color="secondary" onClick={toggleModal}>
                        Cancel
                    </Button>
                </ModalFooter> */}
            </Modal>
        </>
    )
}
export default AuthModal;