import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import homeImg from '../assets/images/hero-img1.png'
import aboutImg from '../assets/images/about-us.png'
import '../style/home.css'
import webDesign from '../assets/images/web-design.png'
import webDevelopment from '../assets/images/web-development.png'
import whyChoose from '../assets/images/why-choose-us.png'
import { Link } from 'react-router-dom'
import chooseUs from '../assets/images/why-choose-us.png'
import kidsImg from '../assets/images/kids-learning.png'
import seoImg from '../assets/images/seo.png'
import uxuiImg from '../assets/images/ui-ux.png'
import Carousel from '../components/UI/Carousel'
import testImg from '../assets/images/testimonial01.png'


const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="left">
                <h3 className='left__title'>Anytime Anywhere Learn on your Suitable Schedule</h3>
                <p className="left__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quo quasi alias illum ipsam reiciendis dignissimos commodi necessitatibus neque hic?
                </p>
                <div className="left__input">
                  <input type="text" placeholder='Search....' />
                  <button>Search</button>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="right__img">
                <img src={homeImg} alt="" className='w-100' />
              </div>
            </Col>
            <Col lg='12'>
              <div className="home__subscribe d-flex align-items-center justify-content-between mt-5">
                <div className='d-flex align-items-center justify-content-center subscribe__content'>
                  <span><i class="ri-vimeo-line"></i></span>
                  <h5>Vimeo</h5>
                </div>
                <div className='d-flex align-items-center justify-content-center subscribe__content'>
                  <span><i class="ri-coreos-line"></i></span>
                  <h5>Pinterest</h5>
                </div>
                <div className='d-flex align-items-center justify-content-center subscribe__content'>
                  <span><i class="ri-apple-fill"></i></span>
                  <h5>Apple</h5>
                </div>
                <div className='d-flex align-items-center justify-content-center subscribe__content'>
                  <span><i class="ri-dribbble-line"></i></span>
                  <h5>Diribble</h5>
                </div>
                <div className='d-flex align-items-center justify-content-center subscribe__content'>
                  <span><i class="ri-finder-fill"></i></span>
                  <h5>Finder</h5>
                </div>
                <div className='d-flex align-items-center justify-content-center subscribe__content'>
                  <span><i class="ri-google-fill"></i></span>
                  <h5>Google</h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="about__img">
                <img src={aboutImg} alt="" className='w-100' />
              </div>
            </Col>
            <Col lg='6'>
              <div className="about__content">
                <div className="about_top">
                  <h2 className='about__title mt-5'>About Us</h2>
                  <p className='about__desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum libero a, vel illum exercitationem tempore.</p>
                </div>
                <div className="about__bottom">
                  <div className='d-flex'>
                    <div className="about__box">
                      <h2 className="about__box-title">10K</h2>
                      <p className="about__box-desc">Completed Project</p>
                    </div>
                    <div className="about__box">
                      <h2 className="about__box-title">5M</h2>
                      <p className="about__box-desc">Patient Around Word</p>
                    </div>
                  </div>
                  <div className='d-flex'>
                    <div className="about__box">
                      <h2 className="about__box-title">37M</h2>
                      <p className="about__box-desc">Ideas Raised Funds</p>
                    </div>
                    <div className="about__box">
                      <h2 className="about__box-title">2K</h2>
                      <p className="about__box-desc">Categories Served</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="popular">
                <h3 className="popular__title">Our popular Course</h3>
                <div className="popular__content d-flex justify-content-between">
                  <p className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />Ducimus laboriosam quisquam dolore quis autem porro mollitia neque culpa quam natus.</p>
                  <button className='content__btn'>See All</button>
                </div>
              </div>
            </Col>
            <Col lg='4'>
              <div className="popular__card">
                <div className="popular__card-img">
                  <img src={webDesign} alt="" className='w-100' />
                  <div className="popular__card-body">
                    <h3 className='title__card'>Web design BootCamp 2022 Beginner</h3>
                    <div className="card__body d-flex algin-items-center justify-content-between">
                      <div className="body__content d-flex algin-items-center justify-content-between">
                        <span> <i class="ri-book-open-line"></i></span>
                        <h5>12 Lesson</h5>
                      </div>
                      <div className="body__content d-flex algin-items-center justify-content-between">
                        <span> <i class="ri-user-line"></i></span>
                        <h5>12.5k</h5>
                      </div>
                    </div>
                    <div className="card__body d-flex algin-items-center justify-content-between">
                      <div className="body__content d-flex algin-items-center justify-content-between">
                        <span> <i class="ri-star-fill"></i></span>
                        <h5>5.9k</h5>
                      </div>
                      <Link className='content__link' to='#'>Enroll Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg='4'>
              <div className="popular__card">
                <div className="popular__card-img">
                  <img src={webDevelopment} alt="" className='w-100' />
                  <div className="popular__card-body">
                    <h3 className='title__card'>Professional Graphics Design PhotoShop, AdobeXD, Figma</h3>
                    <div className="card__body d-flex algin-items-center justify-content-between">
                      <div className="body__content d-flex algin-items-center justify-content-between">
                        <span> <i class="ri-book-open-line"></i></span>
                        <h5>12 Lesson</h5>
                      </div>
                      <div className="body__content d-flex algin-items-center justify-content-between">
                        <span> <i class="ri-user-line"></i></span>
                        <h5>12.5k</h5>
                      </div>
                    </div>
                    <div className="card__body d-flex algin-items-center justify-content-between">
                      <div className="body__content d-flex algin-items-center justify-content-between">
                        <span> <i class="ri-star-fill"></i></span>
                        <h5>5.9k</h5>
                      </div>
                      <Link className='content__link' to='#'>Enroll Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg='4'>
              <div className="popular__card">
                <div className="popular__card-img">
                  <img src={whyChoose} alt="" className='w-100' />
                  <div className="popular__card-body">
                    <h3 className='title__card'>UI/UX BootCamp for Beginners in 2022</h3>
                    <div className="card__body d-flex algin-items-center justify-content-between">
                      <div className="body__content d-flex algin-items-center justify-content-between">
                        <span> <i class="ri-book-open-line"></i></span>
                        <h5>12 Lesson</h5>
                      </div>
                      <div className="body__content d-flex algin-items-center justify-content-between">
                        <span><i class="ri-user-line"></i></span>
                        <h5>12.5k</h5>
                      </div>
                    </div>
                    <div className="card__body d-flex algin-items-center justify-content-between">
                      <div className="body__content d-flex algin-items-center justify-content-between">
                        <span> <i class="ri-star-fill"></i></span>
                        <h5>5.9k</h5>
                      </div>
                      <Link className='content__link' to='#'>Enroll Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='6' className='mt-4'>
              <div className="choose__us">
                <h3 className='choose__title'>
                  Why Choose Us
                </h3>
                <p className="choose__content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aperiam, ut eius neque sed consequuntur quaerat atque excepturi quisquam rerum veritatis exercitationem. Odio, harum. Magnam, mollitia, doloremque est harum assumenda id expedita quibusdam repellat exercitationem natus voluptas? Esse, ipsam pariatur!
                </p>
              </div>
            </Col>
            <Col lg='6' className='mt-4'>
              <div className="choose__right">
                <img src={chooseUs} alt="" className=' choose__img w-100' />
                <div className="choose__icon">
                  <span ><i class="ri-play-fill"></i></span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='4'>
              <div className="box text-center">
                <span><i class="ri-draft-fill"></i></span>
                <div className="box__content">
                  <h3 className='box__content-title'>Quick Learning</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vitae blanditiis fuga minus harum aliquid totam assumenda tenetur.</p>
                </div>
              </div>
            </Col>
            <Col lg='4'>
              <div className="box text-center">
                <span><i class="ri-checkbox-multiple-blank-line"></i></span>
                <div className="box__content">
                  <h3 className='box__content-title'>All Support</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vitae blanditiis fuga minus harum aliquid totam assumenda tenetur.</p>
                </div>
              </div>
            </Col>
            <Col lg='4'>
              <div className="box text-center">
                <span><i class="ri-contacts-book-line"></i></span>
                <div className="box__content">
                  <h3 className='box__content-title'>Certification</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vitae blanditiis fuga minus harum aliquid totam assumenda tenetur.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <div className="free__course">
              <h3>Our Free Course</h3>
            </div>
            <Col lg='3'>
              <div className="free__course-box">
                <img src={webDevelopment} alt="" className='w-100' />
                <button className='course__btn'>Free</button>
              </div>
              <div className="free__course-content">
                <h3 className='course__content-title'>
                  Basic Development Course
                </h3>
                <div className="course__box d-flex align-items-center">
                  <div className="course__des d-flex algin-items-center justify-content-between">
                    <span><i class="ri-user-line"></i></span>
                    <h5>5.3k</h5>
                  </div>
                  <div className="course__des d-flex algin-items-center justify-content-between">
                    <span><i class="ri-star-fill"></i></span>
                    <h5>5.3k</h5>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg='3'>
              <div className="free__course-box">
                <img src={kidsImg} alt="" className='w-100' />
                <button className='course__btn'>Free</button>
              </div>
              <div className="free__course-content">
                <h3 className='course__content-title'>
                  Coding for Junior Basic Course
                </h3>
                <div className="course__box d-flex align-items-center">
                  <div className="course__des d-flex algin-items-center justify-content-between">
                    <span><i class="ri-user-line"></i></span>
                    <h5>5.3k</h5>
                  </div>
                  <div className="course__des d-flex algin-items-center justify-content-between">
                    <span><i class="ri-star-fill"></i></span>
                    <h5>5.3k</h5>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg='3'>
              <div className="free__course-box">
                <img src={seoImg} alt="" className='w-100' />
                <button className='course__btn'>Free</button>
              </div>
              <div className="free__course-content">
                <h3 className='course__content-title'>
                  Search Engine Optimization - Basic
                </h3>
                <div className="course__box d-flex align-items-center">
                  <div className="course__des d-flex algin-items-center justify-content-between">
                    <span><i class="ri-user-line"></i></span>
                    <h5>5.3k</h5>
                  </div>
                  <div className="course__des d-flex algin-items-center justify-content-between">
                    <span><i class="ri-star-fill"></i></span>
                    <h5>5.3k</h5>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg='3'>
              <div className="free__course-box">
                <img src={uxuiImg} alt="" className='w-100' />
                <button className='course__btn'>Free</button>
              </div>
              <div className="free__course-content">
                <h3 className='course__content-title'>
                  Basic UI/UX Design - Figma
                </h3>
                <div className="course__box d-flex align-items-center">
                  <div className="course__des d-flex algin-items-center justify-content-between">
                    <span><i class="ri-user-line"></i></span>
                    <h5>5.3k</h5>
                  </div>
                  <div className="course__des d-flex algin-items-center justify-content-between">
                    <span><i class="ri-star-fill"></i></span>
                    <h5>5.3k</h5>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="student__voice">
                <img src={testImg} alt="" />
              </div>
            </Col>
            <Col lg='6' className='mt-5'>
              <h3 className='carousel__title'>Our Carousel Voice  </h3>
              <Carousel />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row> 
            <Col lg='12'>
              <div className="subscribe">
                <h3 className="subscribe__title">
                  Subscribe Our Newsletter
                </h3>
                <div className="input__box">
                  <input type="text" />
                  <button className='subscribe__btn'>Subscribe</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home