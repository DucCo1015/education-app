import React,{useRef, useEffect} from 'react'
import { Container, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import '../../style/header.css'

const nav__Links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '#',
    display: 'About'
  },
  {
    path: '#',
    display: 'Courses'
  },
  {
    path: '#',
    display: 'Pages'
  },
  {
    path: '#',
    display: 'Blog'
  },
]

const Header = () => {
  const menuRef = useRef(null)
  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');
  
  const headerRef = useRef();

  const stickyHeader = () => {
    window.addEventListener("scroll", () =>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }
      else{
        headerRef.current.classList.remove('sticky__header')
      }
    }); 
  }
  useEffect(() =>{
    stickyHeader();
    return window.removeEventListener("scroll",stickyHeader)
  })
  
  return (
    <div>
      <header className="header" ref={headerRef}>
        <Container>
          <Row>
            <div className="nav__wrapper d-flex align-item-center justify-content-between">
              <div className="logo d-flex align-items-center justify-content-center">
                <span>
                  <i class="ri-pantone-line"></i>
                </span>
                  <h2>Learners.</h2>
              </div>

              <div className="navigation" ref={menuRef} onClick = {toggleMenu}>
                <ul className='menu d-flex align-items-center justify-content-center gap-4'>
                  {
                    nav__Links.map((item,index)=>(
                      <li className='nav__item' key={index}>
                        <NavLink to = {item.path}>{item.display}</NavLink>
                      </li>
                    ))
                  }
                </ul>
              </div>

              <div className="phone d-flex align-items-center justify-content-center">
                <span> 
                  <i class="ri-phone-line"></i>
                </span>
                <h5>+84 123 456 789</h5>

              </div>

              <div className="mobile__menu" onClick={toggleMenu}>
                <i class="ri-menu-fill"></i>
              </div>
            </div>
          </Row>
        </Container>
      </header>
    </div>
  )
}

export default Header