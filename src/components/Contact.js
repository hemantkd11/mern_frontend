import React from "react";


const Contact = () => {
    return <>
        <div className="contact_info">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 d-flex justify-content-space-between">
                        <div className="contact_info_item d-flex justify-content-space-between align-items-center m-5" >
                            <i className="zmdi zmdi-phone  m-5 "/>
                            <div className="contact_info_content">
                                <div className="contact_info_title">
                                    Phone
                                </div>
                                <div className="contact_info_text">
                                    +91 1111 222 333
                                </div>
                            </div>
                        </div>
                        <div className="contact_info_item d-flex justify-content-between align-items-center" >
                            <i className="zmdi zmdi-email  m-5 " />
                            <div className="contact_info_content">
                                <div className="contact_info_title">
                                    Email
                                </div>
                                <div className="contact_info_text">
                                    Contact@gmail.com
                                </div>
                            </div>
                        </div>
                        <div className="contact_info_item d-flex justify-content-space-between align-items-center" >
                            <i className="zmdi zmdi-map  m-5 " />
                            <div className="contact_info_content">
                                <div className="contact_info_title">
                                    Address
                                </div>
                                <div className="contact_info_text">
                                    Your Complete Address
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* contact us form */}
        <div className="contact_form ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">

                        <div className="contact_form_container ">
                            <div className="contact_form_title text-align-center m-3">
                                <h2>
                                    Get In Touch
                                </h2>
                            </div>

                            <form id="conatct_form">
                                
                                <div className="contact_form_name d-flex justufy-content-space-between  align-items-between">

                                    <input type="text" id="contact_form_name"
                                        className="contact_form_name input_field m-3"
                                        placeholder="Your Name" />     
                                    
                                    <input type="email" id="contact_form_email"
                                        className="contact_form_email input_field  m-3"
                                        placeholder="Your Email" /> 
                                    
                                    <input type="number" id="contact_form_phone"
                                        className="contact_form_phone input_field  m-3"
                                        placeholder="Your Phone no." />  
                                </div>

                                <div className="contact_form_text  d-flex justufy-content-space-between  align-items-between" >
                                    <textarea className="text_field contact_form_message m-3 " col='30' row='10'
                                        placeholder="Message" />
                                </div>

                                <div className="contact_form_buton m-3">
                                    <button type='submit' className="button contact_submit_button">Send Message</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Contact