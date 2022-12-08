import React, { useEffect } from "react";
import Image from'../image/messi.jpg'
import { useNavigate } from "react-router-dom";

const About = () => {
 const Navigate = useNavigate()
 const callAboutPage = async ()=>{
   try{
    const res = await fetch('/about',
   {
     method:"GET",
     headers:{
        'Accept': 'application/json',
        "Content-Type":"application/json"
     },
     credentials:"include"
    })
    const data = await res.json()
    console.log(data)
    
    if(!res.status === 200){
        const error = new Error(res.error);
        throw error;
    }
   } catch(err){
     console.log(err)
     Navigate('/login')
   }

}
    useEffect(()=>{
      callAboutPage()
    },[])
    return <>
        <div className="container emp-profile pt-5">
            <form method="GET">
                <div className="row">
                    <div className=" image col-md-4">
                        <img src={Image} alt='profile' />
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                            <h5>Messi</h5>
                            <h6>Football Player</h6>
                            <p className="profile-rating mt-3 mb-5">
                                RANKING : <span>1/10</span>
                            </p>


                            <ul className="nav nav-tabs" role='tablist'>
                                <li className="nav-item">
                                    <a className="nav-link active " role="tab" id='home-tab' data-toggle="tab" href="#home" >About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  " role="tab" id='profile-tab' data-toggle="tab" href="#profile">Timeline</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <input type="Submit" className="profile-edit-btn" name='btnAddMore'value="Edit profile"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-cover">
                            <p>Work Link</p>
                            <a href="https://www.youtube.com/watch?v=KPukola_os8" target="_blank">Youtube</a><br/>
                            <a href="https://www.youtube.com/watch?v=KPukola_os8" target="_blank">Instagram</a><br/>
                            <a href="https://www.youtube.com/watch?v=KPukola_os8" target="_blank">Hemant </a><br/>
                            <a href="https://www.youtube.com/watch?v=KPukola_os8" target="_blank">Website</a><br/>
                            <a href="https://www.youtube.com/watch?v=KPukola_os8" target="_blank">web Page</a><br/>
                            <a href="https://www.youtube.com/watch?v=KPukola_os8" target="_blank">React js</a><br/>
                            <a href="https://www.youtube.com/watch?v=KPukola_os8" target="_blank">FaceBook</a>
                        </div>
                    </div>
                    <div className="col-md-8  pl-5 about-info">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label >User ID</label>
                                    </div>
                                    <div className="col-md-6">
                                       <p>254645646454654544</p>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-md-6">
                                        <label >Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Hemant Diwakar</p>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-md-6">
                                        <label >Email</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>254645646454654544</p>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-md-6">
                                        <label >Phone</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>254645646454654544</p>
                                    </div>
                                    
                                </div>
                                <div className="row ">
                                    <div className="col-md-6">
                                        <label >Profession</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Web Devloper</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade  " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label >Expression</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>254645646454654544</p>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label >Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Hemant Diwakar</p>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label >Email</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>254645646454654544</p>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label >Phone</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>254645646454654544</p>
                                    </div>

                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label >Web Devloper</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>254645646454654544</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </>
}
export default  About