import React from 'react'
import loginImg from '../assets/images/login.png'
import LoginForm from '../components/LoginForm'
import '../style/login.css'

export default function Login() {
    return (
        <div className='d-md-flex login_screen'>
            <div className="">
                <img className='w-100' src={loginImg} alt="" />
            </div>
            <div className="d-flex align-items-center justify-content-center container">
                <LoginForm />
            </div>
        </div>
    )
}
