import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './assets/Sections/Header/Header'
import Footer from './assets/Sections/Footer/Footer'
import Content from './assets/Sections/Content/Content'
import HomePage from './assets/Pages/HomePage/HomePage'
import AboutUSPage from './assets/Pages/AboutUSPage/AboutUSPage'
import OurServicePage from './assets/Pages/OurServicePage/OurServicePage'
import ContactPage from './assets/Pages/ContactPage/ContactPage'
    

const App = () => {
  return (
    <div>
       <Header/>
          <Content>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element = {<HomePage/>}/>
                    <Route path='/AboutUSPage' element ={<AboutUSPage/>}/>
                    <Route path='/OurServicePage' element ={<OurServicePage/>}/>
                    <Route path='/ContactPage' element = {<ContactPage/>}/>
                   </Routes>
            </BrowserRouter>
          </Content>
       <Footer/>
    </div>
  )
}

export default App