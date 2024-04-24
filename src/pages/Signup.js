import React from 'react'
import sign from '../imgs/sigin.jpg'
import { NavLink } from 'react-router-dom'
const Signup = () => {
  return (
    <div className='signinpage'>
        <img src={sign} style={{height:'70vh', width:'40vw'}} alt="" className='signimg' />
        <div className='signin'>
        <h1>Create Account</h1>
        <p>We suggest using email address you use at work</p>
      <form action="" className="signindetails">
        <label htmlFor=""></label>Email Address<input type="email" placeholder='eg. johndoe@example.com' />
        <label htmlFor=""></label>Password<input type="password" placeholder='at least 6 characters'/>
        <button className="signbtn">Sign in</button>
      </form>
      <p>Already Signed</p>
      <NavLink style={{color:"#ffc31f"}}>Signin</NavLink>
        </div>
    </div>
  )
}

export default Signup
