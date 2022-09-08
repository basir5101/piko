import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const navigate = useNavigate();
    const [validation, setValidation] = useState(false);
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        checkEmail(userInfo.email)
        checkPassword(userInfo.password)
        console.log('hi');
        navigate('/submit')
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        name === 'email' ? setEmailError("") : setPasswordError("")
        let newData = { ...userInfo };
        newData[name] = value;
        setUserInfo(newData)
    }

    const checkEmail = (email) => {
        const validEmail = email.match(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        )
        if (validEmail) {
            console.log(validEmail);
            return true
        } else {
            console.log('na', validEmail);
            setEmailError("Email in not valid");
            return false
        }

    }

    const checkPassword = (password) => {
        console.log(/(\d.*[A-Z])/.test(password))
        if (password.length < 8) {
            setPasswordError('at least 8 character')
            return false
        } else if (!/^(?=.*[A-Z])/.test(password)) {
            setPasswordError('at least one uppercase')
            return false
        } else if (!/^(?=.*[a-z])/.test(password)) {
            setPasswordError('at least one lowercase')
            return false
        }
        else if (!/^(?=.*[0-9])/.test(password)) {
            setPasswordError('at least one number')
            return false
        } else if (!/^(?=.*[!@#$%\^&*(){}[\]<>?/|\-])/.test(password)) {
            setPasswordError('at least one special character')
            return false
        }
        else {
            return true
        }
    }

    return (
        <form onSubmit={handleSubmit} class={`w-75`}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input name='email' onChange={handleChange} value={userInfo.email} type={'email'} class={`form-control  py-2 ${emailError && 'border-danger'}`} id="username" />
                {
                    emailError && <div className='text-danger'>
                        {emailError}
                    </div>
                }
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input name='password' onChange={handleChange} value={userInfo.password} type={'password'} class={`form-control  py-2 ${passwordError && 'border-danger'}`} />
                {
                    passwordError && <div className='text-danger'>
                        {passwordError}
                    </div>
                }
            </div>
            <div className="mb-3">
                <button className="btn-submit form-control" type='submit' onSubmit={handleSubmit}>Submit form</button>
            </div>
        </form>
    )
}
