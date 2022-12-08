import React, { useState } from "react";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css'
import {useNavigate } from "react-router-dom";

const SignIn = () => {

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
     
    const Navigate = useNavigate()

    const handleSumbit = async (e) =>{
     e.preventDefault();
     const res = await fetch('/signin',{
        method:"POST",
        headers: {
            
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email:"Email",
            password:"Password"
        })
    })
    const data = await res.json()
    if(res.status === 400 || ! data){
        console.log('invalid')
    }else{
        console.log('done')
        Navigate('/')
    }

    }
    









//     const Navigate = useNavigate()
//     const[login ,setLogin] =useState({
      
//         Email: "",
//         Password: ""
//    })
   
   
//     const HandleLogin = (e)=> {
//     console.log(e.target.name, e.target.value)
//     setLogin({ ...login, [e.target.name]: e.target.value })
// }

//   const handleSumbit = async(e)=>{
//    e.preventDefault()
//    const { Email,Password } = login;
//    const res = await fetch('/signin',{
//     method:"POST",
//     headers: {
//         'Accept': 'application/json',
//         "Content-Type":"application/json"
//     },
//     body : JSON.stringify({ Email,Password })
//     })
//     const data = await res.json()
//     console.log({ data })
       
//         if(res.status === 400 || !data){
//             window.alert('invalid field')
//         }else{
//             window.alert('done')
//             Navigate("/")
//         }
//   }



    return (
        <section className="sign-in">
            <div className="container  mt-5">
                <div className="signin-content">
                    <div className="signin-form">
                        <h2 className="form-title">Sign-in</h2>
                        <form  method="POST" className="signin-form" id="signin-form"
                         autoComplete="off">
                            <div className="form-group">
                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="Email">
                                    <i className="zmdi zmdi-email" />
                                    <input type="email" name="Email" id="Email"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)} 
                                     placeholder="YourEmail" />
                                </label>
                            </div>
                            
                            
                            <div className="form-group">
                                <label htmlFor="password">
                                    <i className="zmdi zmdi-lock" />
                                    <input type="password" name="Password" id="Password"
                                     value={password}
                                     onChange={(e)=>setPassword(e.target.value)} 
                                     placeholder="Password" />
                                </label>
                            </div>
                            
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signup" className="form-submit" 
                                value="Log In" 
                                onClick={handleSumbit}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="signin-image">
                        <figure>
                            {/* <img src={learnReg} alt="signup"></img> */}
                        </figure>
                        <Link to="/signup " className="link m-5">create an account</Link>
                    </div>
                </div>
                <div> </div>
            </div>
        </section>

    )
}
export default SignIn