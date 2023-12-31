import React,{useState} from "react";
export const Register = (props) => {
    const [email,setEmail]= useState('');
    const [pass,setpass]= useState('');
    const [name,setName]= useState('');

    const handleSubmit = (e) => {
        e.preventdefault();
        console.log(email);

    }
    return(
     <div className="auth-form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlfor="name">FullName</label>
            <input value={name} name="name" id="name" placeholder="Full Name"/>
            <label htmlfor="email">email</label>
            <input value={email} type="email" placeholder="amitahirwar1198911@gmail.com" id="email" name="email"/>
            <label htmlfor="Password">password</label>
            <input value={pass} type="password" placeholder="*******" id="password" name="password"/>
            <button type="submit">Login In</button>
        </form>
        <button  className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account ? Login here.</button>
    </div>
    )
}
