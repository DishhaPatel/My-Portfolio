 
 import { Navbar,Container,Nav } from "react-bootstrap"
 import { useState,useEffect } from "react"
 import Logo from '../Assets/img/Logo.jpg'
 import linkedin from '../Assets/img/linkedin.png'
 import facebook from '../Assets/img/facebook.png'
 import insta from '../Assets/img/insta.png'
 
  export const NavBar=()=>
  {

    const [activeLink,setActiveLink]=useState('home')
    const [scrolled,seScrollled]=useState(false)

    useEffect(()=>
    {
        const onScroll=()=>{
            if(window.scrollY>50)
        {
            seScrollled(true)
        }
        else{
            seScrollled(false)
        }
        }

        window.addEventListener("scroll",onScroll)

        return()=>window.removeEventListener("scroll",onScroll)
    },   [])

    const onUpdateActiveLink=(value)=>{
        setActiveLink(value)
    }


    return(
        <Navbar  expand="lg" className={scrolled ? "scrolled":""} >
      <Container>
        <Navbar.Brand href="#home">
            <img src={Logo} alt="Logo" style={{height:"40px",width:"70px",}}></img>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink ==='home'?"active navbar-link":"navbar-link"} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink ==='skills'?"active navbar-link":"navbar-link"} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink ==='projects'?"active navbar-link":"navbar-link"} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
               <div className="social-icon">
                 <a href="#"><img src={linkedin} alt=""></img></a>
                 <a href="#"><img src={insta} alt=""style={{height:"36px",width:"45px",}}  ></img></a>
                 <a href="#"><img src={facebook} alt="" ></img></a>
               </div>
               <button className="vvd" onClick={()=>console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }