import React from 'react'

const Register = () => {
  return (
    <div>
      <div className='register-left'>
      <div className='register'>
        <h1>Register as Worker</h1>
        <p style={{fontSize:'20px'}}>Register with HomeGroom by filling the form and we will reach you</p>
        <button className='btn'>Fill Details</button>
      </div>
      </div>
  <div className="contactusright">
  <div className='contactus'>
      <h1>Contact us to reach Quicker</h1>
<form action="" className='contactform'>
    <label htmlFor=""></label>Full Name<input type="text" />
    <label htmlFor=""></label>Phone number<input type="number" />
    <label htmlFor=""></label>Email<input type="email" />
    <button type='submit' className='btn'>submit</button>
</form>
  </div>
      </div>
    </div>
  )
}

export default Register
