// import React,{useState} from 'react'
// import styles from './signup.css'
// import { useNavigate } from 'react-router-dom'
// const SignUpForm = ()=>{
//     const [formValues, setFromValues] = useState({check:false, name:"",username:"",mail:"",mobile:""})
//     const [nameError, setNameError] = useState(false)
//     const [userNameError, setUserNameError] = useState(false)
//     const [mailError, setMailError] = useState(false)
//     const [mobileError, setMobileError] = useState(false)
//     const [signUpError, setSignUpError] = useState(false)
//     const navigate = useNavigate()
//     const handleChange = (e)=>{
//         setFromValues({...formValues,[e.target.name]:e.target.value})
//     }
//     const handleSubmit = (e)=>{
//         e.preventDefault()
//         let valid = true;
//         if(!(formValues.name.trim().length>0)){
//             setNameError(true)
//             valid = false;
//         }else{
//             setNameError(false)
//         }
//         if(!(formValues.username.trim().length>0)){
//             setUserNameError(true)
//             valid = false;
//         }else{
//             setUserNameError(false)
//         }
//         if(!(formValues.mail.trim().length>0)){
//             setMailError(true)
//             valid = false;
//         }else{
//             setMailError(false)
//         }
//         if(!(formValues.mobile.trim().length>0)){
//             setMobileError(true)
//             valid = false;
//         }else{
//             setMailError(false)
//         }
//         if(!formValues.check){
//             setSignUpError(true)
//             valid = false;
//         }else{
//             setSignUpError(false)
//         }
        
//         if(valid)
//         {
//             window.localStorage.setItem("userData",JSON.stringify(formValues))
//             navigate('/genre')
//         }
//     }
//     return(
//         <div className={styles.body}>
//             <p className="super">Super App</p>
//             <p className="create">Create a new Account</p>
//             <form>
//                 <input onChange={(e)=>handleChange(e)}  type="text" name='name'  placeholder="Name"></input>
//                 {nameError?<p className='error'>Please enter your name</p>:<></>}
//                 <input onChange={(e)=>handleChange(e)}  type="text" name='username'  placeholder="UserName"></input>
//                 {userNameError?<p className='error'>Please enter a username</p>:<></>}
//                 <input onChange={(e)=>handleChange(e)}  type="email" name='mail'  placeholder="Email"></input>
//                 {mailError?<p className='error'>Please enter your email</p>:<></>}
//                 <input onChange={(e)=>handleChange(e)}  type="tel"  name='mobile'  placeholder="Mobile"></input>
//                 {mobileError?<p className='error'>Please enter your mobile number</p>:<></>}
//                 <br></br>
//                 <label>
//                 <input onChange={(e)=>setFromValues({...formValues,[e.target.name]:e.target.checked})}  type="checkbox" name='check' />
//                 <h2 className='checkbox'>Share my registration data with Superapp</h2>
//                 </label>
//                 <br></br>
//                 {signUpError?<p className='error'>Check this box if you want to proceed</p>:<></>}
//                 <button type='submit'  onClick={(e)=>handleSubmit(e)}>SIGN UP</button>
//             </form><br></br>
//             <footer className={styles.footer}>
//                 <p className="inst">By clicking on Sign up. you agree to Superapp<span style={{color:"green"}}> Terms and Conditions of Use</span></p><br></br><br></br>
//                 <p className="inst">To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp<span style={{color:"green"}}> Privacy Policy</span></p>
//             </footer>
//         </div>
//     )
// }

// export default SignUpForm


import React, { useState } from 'react';
import styles from './signup.css';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const [formValues, setFromValues] = useState({
    check: false,
    name: "",
    username: "",
    mail: "",
    mobile: ""
  });
  const [nameError, setNameError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [mailError, setMailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [signUpError, setSignUpError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFromValues((prevValues) => ({
      ...prevValues,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Reset error states
    if (nameError) {
      setNameError(false);
    }
    if (userNameError) {
      setUserNameError(false);
    }
    if (mailError) {
      setMailError(false);
    }
    if (mobileError) {
      setMobileError(false);
    }
    if (signUpError) {
      setSignUpError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    if (!(formValues.name.trim().length > 0)) {
      setNameError(true);
      valid = false;
    }
    if (!(formValues.username.trim().length > 0)) {
      setUserNameError(true);
      valid = false;
    }
    if (!(formValues.mail.trim().length > 0)) {
      setMailError(true);
      valid = false;
    }
    if (!(formValues.mobile.trim().length > 0)) {
      setMobileError(true);
      valid = false;
    }
    if (!formValues.check) {
      setSignUpError(true);
      valid = false;
    }

    if (valid) {
      window.localStorage.setItem("userData", JSON.stringify(formValues));
      navigate('/genre');
    }
  };

  return (
    <div className={styles.body}>
      <p className="super">Super App</p>
      <p className="create">Create a new Account</p>
      <form>
        <input onChange={(e) => handleChange(e)} type="text" name='name' placeholder="Name" />
        {nameError ? <p className='error'>Please enter your name</p> : null}
        <input onChange={(e) => handleChange(e)} type="text" name='username' placeholder="UserName" />
        {userNameError ? <p className='error'>Please enter a username</p> : null}
        <input onChange={(e) => handleChange(e)} type="email" name='mail' placeholder="Email" />
        {mailError ? <p className='error'>Please enter your email</p> : null}
        <input onChange={(e) => handleChange(e)} type="tel" name='mobile' placeholder="Mobile" />
        {mobileError ? <p className='error'>Please enter your mobile number</p> : null}
        <br></br>
        <label>
          <input onChange={(e) => setFromValues({ ...formValues, [e.target.name]: e.target.checked })} type="checkbox" name='check' />
          <h2 className='checkbox'>Share my registration data with Superapp</h2>
        </label>
        <br></br>
        {signUpError ? <p className='error'>Check this box if you want to proceed</p> : null}
        <button type='submit' onClick={(e) => handleSubmit(e)}>SIGN UP</button>
      </form><br></br>
      <footer className={styles.footer}>
        <p className="inst">By clicking on Sign up. you agree to Superapp<span style={{ color: "green" }}> Terms and Conditions of Use</span></p><br></br><br></br>
        <p className="inst">To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp<span style={{ color: "green" }}> Privacy Policy</span></p>
      </footer>
    </div>
  );
};

export default SignUpForm;
