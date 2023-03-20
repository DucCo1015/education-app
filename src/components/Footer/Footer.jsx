import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../style/footer.css'

const quick__Links = [
  {
    path: '#',
    display: 'Home'
  },
  {
    path: '#',
    display: 'About Us'
  },
  {
    path: '#',
    display: 'Contact'
  },
  {
    path: '#',
    display: 'Blog'
  },
];

const info__Links = [
  {
    path: '#',
    display: 'Privacy Policy'
  },
  {
    path: '#',
    display: 'Membership'
  },
  {
    path: '#',
    display: 'Purchases Guide'
  },
  {
    path: '#',
    display: 'Terms of Service'
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <Container>
          <Row>
            <Col lg='3' className='mb-3'>
              <div className="footer__top">
                <div className="logo__footer d-flex align-items-center justify-content-start">
                  <span>
                    <i class="ri-pantone-line"></i>
                  </span>
                  <h2>Learners.</h2>
                </div>
                <div className="footer__bottom">
                  <h3>Follow us on social media</h3>
                  <div className="bottom__icon">
                    <i class="ri-facebook-fill"></i>
                    <i class="ri-instagram-line"></i>
                    <i class="ri-linkedin-box-line"></i>
                    <i class="ri-twitter-line"></i>
                  </div>
                </div>

              </div>
            </Col>
            <Col lg='3' className='mb-3'>
              <h3 className= 'footer__links'>Explore</h3>
              {
                quick__Links.map((item, index) => (
                  <div className="nav__quick" key={index}>
                    <a href={item.path}>{item.display}</a>
                  </div>
                ))
              }
            </Col>
            <Col lg='3' className='mb-3'>
              <h3 className= 'footer__links'>Information</h3>
              {
                info__Links.map((item, index) => (
                  <div className="nav__quick" key={index}>
                    <a href={item.path}>{item.display}</a>
                  </div>
                ))
              }
            </Col>
            <Col lg='3' className='mb-3'>
              <h3 className= 'footer__links'> Get In Touch</h3>
              <div className="info__contact">
                <p>Address: 123 Di An, Binh Duong</p>
                <p> (+84) 123 456 789</p>
                <p>Email: abc123@gmail.com</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </footer>
  )
}

export default Footer