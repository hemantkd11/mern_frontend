import React,{useState} from "react";
import { Link } from "react-router-dom";
 import learnReg from '../image/learnReg.jpg'

const Registration = () => {


    const HandleInputs = (e)=> {
        console.log(e.target.name, e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const [user, setUser] = useState({
        Name: "",
        Email: "",
        Phone: "",
        Work: "",
        Password: "",
        CPassword: "",
    })

    const SendDataToBackend = async(e) => {
        e.preventDefault()
        const { Name, Email, Phone, Work, Password, CPassword } = user;

        const res = await fetch("/register", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                "Content-Type":"application/json"
            },
            body: JSON.stringify({ Name, Email, Phone, Work, Password, CPassword })
        })
        const data = await res.json()
        console.log({ data })
        return data
    }
    return (
       
            <section className="signup">
                <div className="container  mt-5">
                <div className="signup-content d-flex">
                    <div className="signup-form">
                        <h2 className="form-title">Sign-up</h2>
                        <form method="POST" className="registration-form" id="register-form" autoComplete="off">
                            <div className="form-group">
                                <label htmlFor="Name">
                                    <i className="zmdi zmdi-account  "/>
                                    <input type="text" name="Name" id="Name" placeholder="YourName" value={user.Name} onChange={HandleInputs} />
                                </label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Email">
                                    <i className="zmdi zmdi-email"/>
                                    <input type="email" name="Email" id="Email" placeholder="YourEmail" value={user.Email} onChange={HandleInputs} />
                                </label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Phone">
                                    <i className="zmdi zmdi-phone"/>
                                    <input type="number" name="Phone" id="Phone" placeholder="Your Phone Number" value={user.Phone} onChange={HandleInputs} />
                                </label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Work">
                                    <i className="zmdi zmdi-slideshow"/>
                                    <input type="text" name="Work" id="Work" placeholder="Job" value={user.Work} onChange={HandleInputs} />
                                </label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">
                                    <i className="zmdi zmdi-lock"/>
                                    <input type="password" name="Password" id="Password" placeholder="Password" value={user.Password} onChange={HandleInputs} />
                                </label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="CPassword">
                                    <i className="zmdi zmdi-lock"/>
                                    <input type="password" name="CPassword" id="CPassword" placeholder="Confirm Password" value={user.CPassword} onChange={HandleInputs} />
                                </label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="register" onClick={SendDataToBackend}/>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image ">
                        <figure>
                            <img src={learnReg} alt="signup"></img>
                        </figure>
                        <Link to="/login"> I am already registered</Link>
                    </div> 
                    </div>
                </div>
            </section>
    
    )
}
export default Registration