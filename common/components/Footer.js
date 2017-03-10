import React from 'react'
import {Link} from 'react-router'

const Footer = ({props}) => {
  return (
    <footer id='footer_1' className='bg_blue p-t-100'>
      <div className='container'>
        <div className='row p-b-55'>
          <div className='col-md-3'>
            <div className='footer_logo'>
              <Link to='/'><img src='/assets/images/logo.jpg' alt='logo' height='60' style={{marginLeft: '60px'}} /></Link>
            </div>
          </div>
          <div className='col-md-6 text-center'>
            <ul className='footer_link'>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Services</a></li>
              <li><a href='#'>Projects</a></li>
              <li><a href='#'>Blog</a></li>
              <li><a href='#'>Shop</a></li>
              <li><a href='#'>Contact us</a></li>
            </ul>
          </div>
          <div className='col-md-3'>
            <div className='header-top-links'>
              <div className='social-icons'>
                <ul>
                  <li><a href='#'><i className='fa fa-facebook' aria-hidden='true' /></a></li>
                  <li><a href='#'><i className='fa fa-twitter' aria-hidden='true' /></a></li>
                  <li><a href='#'><i aria-hidden='true' className='fa fa-dribbble' /></a></li>
                  <li><a href='#'><i className='fa fa-linkedin' aria-hidden='true' /></a></li>
                  <li><a href='#'><i className='fa fa-vimeo' aria-hidden='true' /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='footer_line' />
        <div className='row p-t-55'>
          <div className='col-md-8 col-sm-8 col-xs-12'>
            <p className='footer_p color_white'>
              Địa chỉ cty: Tầng 7, toà nhà Sông Đà, đường Phạm Hùng, Xã Mỹ Đình, Huyện Từ Liêm, Hà Nội, Việt Nam
            </p>
          </div>

          <div className='col-md-4 col-sm-4 col-xs-12'>
            <form className='footer_email'>
              <div className='col-md-10'>
                <input type='email' className='email' placeholder='Email Address' />
              </div>
              <div className='col-md-2 submit_b'>
                <input type='submit' className='submit' value='' />
                <span><a href='#'><i className='icon-mail-envelope-closed3' /></a></span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='footer_botom m-t-50 p-t-20 p-b-20'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7'>
              <p>Copyrights © 2017 Copious. All rights reserved.</p>
            </div>
            <div className='col-md-5 text-right'>
              <p>Made with <i className='icon-heart3' /> by <a href='#'>Brighthemes</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
