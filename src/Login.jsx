import React,{useState} from "react";
export const Login = (props) => {
    const [email,setEmail]= useState('');
    const [pass,setpass]= useState('');

    const handleSubmit = (e) => {
        e.preventdefault();
        console.log(email);

    }
    return(
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlfor="email">email</label>
                <input value={email} type="email" placeholder="amitahirwar1198911@gmail.com" id="email" name="email"/>
                <label htmlfor="Password">password</label>
                <input value={pass} type="password" placeholder="*******" id="password" name="password"/>
                <button type="submit">Login In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account ? Register here.</button>
        </div>
    )
}