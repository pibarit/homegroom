import React from 'react'
import Register from '../components/Register';
import Services from '../components/services';
import Page1 from '../components/page1';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Page1/>
      <Services/>
      <Register/>
      <Footer/>
    </div>
  )
}

export default Home
