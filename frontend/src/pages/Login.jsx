import { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../features/auth/authSlice'


function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const dispatch = useDispatch()

    const { user, isLoading, isSuccess, message } = useSelector(state => state.auth)

    const onChange = (e) => {
        // use input name to change input state
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    // --------------------Sign in user------------------------------/
    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }

        dispatch(login(userData))
    }
    // ----------------------------------------------------------------/

    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt />Login{user}
                </h1>
                <p>Please log in to get support</p>
            </section>

            {/* ------------Sign up form inputs ----------------------*/}
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="email" className="form-control" name='email' id='email' value={email} onChange={onChange} placeholder='Enter your email' required />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name='password' id='password' value={password} onChange={onChange} placeholder='Enter password' required />
                    </div>
                    <div className="form-group">
                        <button type='submit' className="btn btn-block">Submit</button>
                    </div>
                </form>
            </section>
            {/* ----------------------------------------------------------*/}
        </>
    )
}

export default Login