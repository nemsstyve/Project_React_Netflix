import { useState } from "react"

function register() {
    const [formData, setFormData] = useState({
        email: '', // required
        password: '', // required
        username: '' // optional
    })

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3003/users', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    function handleChange(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    return (
        
        <div>
            <br/><br/>
            <h1>Signup Form</h1>
            <form className='login-form' onSubmit={e => handleSubmit(e)}>
                <input type='text' placeholder='Username' value={formData.username} name='username' onChange={e => handleChange(e)} ></input>
                <input type='text' placeholder='Email' value={formData.email} name='email' onChange={e => handleChange(e)} ></input>
                <input type='text' placeholder='Password' value={formData.password} name='password' onChange={e => handleChange(e)} ></input>
                <button className='login-btn' type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default register;