import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email'),
    number: Yup.number().required('Number is required'),
});


const LoginOtp = () => {
    const [fieldOption, setFieldOption] = useState("Number");
    const [email, setEmail] = useState(true);
    const [otpSend, setOtpSend] = useState(false);

    const fieldOPtionChange = () => {
        setFieldOption(`${fieldOption === "Email" ? 'Number' : 'Email'}`);
        setEmail(!email);
    }



    return (
        <div>
            <div>
                <Formik
                initialValues={{ email: '', number: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setOtpSend(true);
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
                }}
                >
                {({ isSubmitting }) => (
                <Form style={{backgroundColor:"black", color:"white", border:"2px slid white", boxShadow:"2px 0px 14px black", borderRadius:"25px", height:"50vh", width:"40vw", margin:"auto", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
                {otpSend ? (
                        <>
                            <h3 style={{color:"white"}}> Login via OTP</h3>
                            <div style={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
                                <input style={{width:"20px", color:"white", textAlign:"center", backgroundColor:"black", border:"2px solid white", borderRadius:"10px", padding:"10px"}} type='text' autoFocus="false"/>
                                <input style={{width:"20px", color:"white", textAlign:"center", backgroundColor:"black", border:"2px solid white", borderRadius:"10px", padding:"10px"}} type='text'/>
                                <input style={{width:"20px", color:"white", textAlign:"center", backgroundColor:"black", border:"2px solid white", borderRadius:"10px", padding:"10px"}} type='text'/>
                                <input style={{width:"20px", color:"white", textAlign:"center", backgroundColor:"black", border:"2px solid white", borderRadius:"10px", padding:"10px"}} type='text'/>
                            </div>
                            <br></br>
                            <button style={{cursor:"pointer", border: "none", padding: "10px 25px", borderRadius: "20px" }} >Login</button>
                        </>
                            ) : 
                        <>
                        <p>
                            Login via OTP with {" "}
                            <button onClick={fieldOPtionChange} style={{ border: "none", borderRadius: "20px", padding: "10px" }}>
                            {fieldOption}
                            </button>
                        </p>
                        {email ? (
                            <div>
                            <label htmlFor="email">Email:</label>
                            <Field style={{ border: "none", margin: "10px", padding: "30px", borderRadius: "20px" }} type="email" name="email" placeholder="Enter your email" />
                            <ErrorMessage name="email" component="div" />
                            </div>
                        ) : (
                            <div>
                            <label htmlFor="number">Number:</label>
                            <Field style={{ border: "none", margin: "10px", padding: "30px", borderRadius: "20px" }} type="text" name="number" placeholder="Enter your number" />
                            <ErrorMessage name="number" component="div" />
                            </div>
                        )}
                        <button style={{ border: "none", padding: "10px", borderRadius: "20px" }} type="submit" disabled={isSubmitting}>
                            Send OTP
                        </button>
                    </>
                    }
                </Form>
                )}
            </Formik>
            </div>
        </div>
    )
}

export default LoginOtp