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
              <li><Link to='/'>Trang chủ</Link></li>
              <li><Link to='/about'>Giới thiệu</Link></li>
              <li><Link to='/services'>Dịch vụ</Link></li>
              <li><Link to='/products'>Sản phẩm</Link></li>
              <li><Link to='/news' >Tin tức</Link></li>
              <li><Link to='/contact'>Liên hệ</Link></li>
            </ul>
          </div>
          <div className='col-md-3' />
        </div>
        <div className='footer_line' />
        <div className='row p-t-55'>
          <div className='col-md-8 col-sm-8 col-xs-12'>
            <p className='footer_p color_white'>
              Địa chỉ: Tầng 7 Tòa nhà Sông Đà 9, Đường Phạm Hùng, Phường Mỹ Đình 2 , Quận Nam Từ Liêm, Hà Nội, Việt Nam
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
              <p>Copyrights © 2017 Minh Phat Logistics</p>
            </div>
            <div className='col-md-5 text-right'>
              <p>Made with <i className='icon-heart3' /> by <a href='#'>vnguy.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
