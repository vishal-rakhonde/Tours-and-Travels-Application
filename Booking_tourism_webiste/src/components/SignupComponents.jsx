import React, { useState } from "react";
import * as Components from './CssComponents'; // Assuming you have Components.js file in the same directory
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

function SignupComponents() {
    const [signIn, setSignIn] = useState(true); // Changed toggle to setSignIn for clarity

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [message,setMessage] = useState("");
    const navigate = useNavigate()
    const {login} = useAuth();

    const handleToggle = () => {
        setSignIn(prevState => !prevState); // Toggling the signIn state
    };
    const handleSubmit = async()=>{
        console.log({name,email,password})
        if(password.length<8){
            setMessage("Password must be at least 8 characters long");
            return;
        }
        const response =await fetch("http://127.0.0.1:3000/signup",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({name,email,password}),
        })

        const r = await response.json();
        setName("")
        setEmail("")
        setPassword("")

        console.log(r);
        if(r.success){
            navigate("/signup")
        }
    }

    const handlePasswordChange =(e)=>{
        e.preventDefault(e.target.value);
        setPassword(e.target.value)
        if(e.target.value.length<8){
            setMessage("Password must be at least 8 characters long.")
        }else{
            setMessage("")
        }
    }

    const handleSiginSubmit = async ()=>{
        console.log({email,password})
        
        login(email,password,navigate)
    }

    const handleNameChange = (e)=>{
        e.preventDefault();

        const regExp =  /^[a-zA-Z\s]*$/;

        if(regExp.test(e.target.value)){
            setName(e.target.value)
        }
    }

    return (
        <Components.Container>
            {signIn ? ( // Using ternary operator to conditionally render sign in or sign up form
                <Components.SignInContainer>
                    <Components.Form>
                        <Components.Title>Sign in</Components.Title>
                        <Components.Input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
                        <Components.Input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
                        <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                        <Components.Button type="button" onClick={handleSiginSubmit}>Sign In</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>
            ) : (
                <Components.SignUpContainer>
                    <Components.Form>
                        <Components.Title>Create Account</Components.Title>
                        <Components.Input  type='text' value={name} onChange={handleNameChange} placeholder='Name' />
                        <Components.Input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
                        <Components.Input type='password' value={password} onChange={handlePasswordChange} placeholder='Password' />
                        <p style={{color:"red"}}>{message}</p>
                        <Components.Button type="button" onClick={handleSubmit}>Sign Up</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>
            )}

            <Components.OverlayContainer>
                <Components.Overlay>
                    <Components.LeftOverlayPanel>
                        <Components.Title>{signIn ? "Welcome Back!" : "Hello, Friend!"}</Components.Title>
                        <Components.Paragraph>
                            {signIn ? "To keep connected with us please login with your personal info" : "Enter Your personal details and start journey with us"}
                        </Components.Paragraph>
                        <Components.GhostButton onClick={handleToggle}>
                            {signIn ? "Sign Up" : "Sign In"}
                        </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel>
                        <Components.Title>{signIn ? "Hello, Friend!" : "Welcome Back!"}</Components.Title>
                        <Components.Paragraph>
                            {signIn ? "Enter Your personal details and start journey with us" : "To keep connected with us please login with your personal info"}
                        </Components.Paragraph>
                        <Components.GhostButton onClick={handleToggle}>
                            {signIn ? "Sign Up" : "Sign In"}
                        </Components.GhostButton>
                    </Components.RightOverlayPanel>
                </Components.Overlay>
            </Components.OverlayContainer>
        </Components.Container>
    );
}

export default SignupComponents;
