// /* global $ */
import React from 'react'
import {Link} from 'react-router'

class Nav extends React.Component {
  // eslint-disable-next-line
  constructor (props) {
    super(props)
  }

  componentDidMount () {

  }

  render () {
    return (
      <div>
        <section id='header-top'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 col-sm-4 col-xs-12 p-0'>
                <div className='hidden'>
                  <h1>hidden</h1>
                </div>
                <p className='p_15 p-white p-t-10'>Chúng tôi có 10 năm kinh nghiệm trong lĩnh vực</p>
              </div>
              <div className='col-md-8 col-sm-8 col-xs-12 text-right p-0'>
                <div className='header-top-links'>
                  <div className='social-icons text-right'>
                    <ul>
                      <li><a href='#'><i aria-hidden='true' className='fa fa-facebook' /></a></li>
                      <li><a href='#'><i aria-hidden='true' className='fa fa-twitter' /></a></li>
                      <li><a href='#'><i className='fa fa-dribbble' aria-hidden='true' /></a></li>
                    </ul>
                  </div>
                </div>
                <div className='cont_office'>
                  <div className='office_menu'>
                    <span className='selected'>Hà Nội</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='header-bottom' className='bg_blue'>
          <div className='container'>
            <div className='bg-white row'>
              <div className='col-md-3 col-sm-3 col-xs-12'>
                <Link to='/'><img src='/assets/images/logo.jpg' alt='logo' height='60' style={{marginLeft: '60px'}} /></Link>
              </div>
              <div className='col-md-9 col-sm-9 col-xs-12'>
                <div className='officeaddress'>
                  <div className='addressbox' data-office='newyork'>
                    <div className='get-tuch text-left'><i className='icon-telephone114 color_red' />
                      <ul>
                        <li><h4>Hotline</h4></li>
                        <li><p className='p_14'>043.201.9595</p></li>
                      </ul>
                    </div>
                    <div className='get-tuch text-left'><i className='icon-icons74 color_red' />
                      <ul>
                        <li><h4>Thời gian làm việc</h4></li>
                        <li><p className='p_14'>08:00 - 17:00</p></li>
                      </ul>
                    </div>
                    <div className='get-tuch text-left'><i className='icon-alarmclock color_red' />
                      <ul>
                        <li><h4>Email</h4></li>
                        <li><p className='p_14'>support@minhphatlogistics.com.vn</p></li>
                      </ul>
                    </div>
                  </div>
                  <div className='addressbox' data-office='london'>
                    <div className='get-tuch text-left'><i className='icon-telephone114 color_red' />
                      <ul>
                        <li><h4>+84 999 999 999</h4></li>
                        <li><p className='p_14'>support@minhphatlogistics.com.vn</p></li>
                      </ul>
                    </div>
                    <div className='get-tuch text-left'><i className='icon-icons74 color_red' />
                      <ul>
                        <li><h4>Tầng 7 tòa nhà sông Đà,</h4></li>
                        <li><p className='p_14'>Đường Phạm Hùng, Phường Mỹ Đình 2, Quận Nam Từ Liêm, Hà Nội</p></li>
                      </ul>
                    </div>
                    <div className='get-tuch text-left'><i className='icon-alarmclock color_red' />
                      <ul>
                        <li><h4>08:00 - 16:30</h4></li>
                        <li><p className='p_14'>Thứ 2 đến thứ 6</p></li>
                      </ul>
                    </div>
                  </div>
                  <div className='addressbox' data-office='melbourne'>
                    <div className='get-tuch text-left'><i className='icon-telephone114 color_red' />
                      <ul>
                        <li><h4>+84 999 999 999</h4></li>
                        <li><p className='p_14'>support@minhphatlogistics.com.vn</p></li>
                      </ul>
                    </div>
                    <div className='get-tuch text-left'><i className='icon-icons74 color_red' />
                      <ul>
                        <li><h4>Tầng 7 tòa nhà sông Đà,</h4></li>
                        <li><p className='p_14'>Đường Phạm Hùng, Phường Mỹ Đình 2, Quận Nam Từ Liêm, Hà Nội</p></li>
                      </ul>
                    </div>
                    <div className='get-tuch text-left'><i className='icon-alarmclock color_red' />
                      <ul>
                        <li><h4>08:00 - 16:30</h4></li>
                        <li><p className='p_14'>Thứ 2 đến thứ 6</p></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <nav className='navbar navbar-default navbar-sticky no-background bootsnav'>
          <div className='container'>
            <div className='row bg-white-2'>
              <div className='col-md-12'>
                <div id='search' className=''>
                  <button className='close' type='button'>×</button>
                  <form>
                    <input type='search' placeholder='Search on Site...' value='' />
                    <span className='searc_button'><i className='icon-icons185' /></span>
                    <button className='btn btn-primary' type='submit'>Search</button>
                  </form>
                </div>
                <div className='navbar-header'>
                  <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#navbar-menu'><i className='fa fa-bars' /></button>
                </div>
                <div className='collapse navbar-collapse  nav_bor_top' id='navbar-menu'>
                  <ul className='nav navbar-nav navbar-left' data-in='fadeInDown' data-out='fadeOutUp'>
                    <li className='dropdown cool-link '><Link to='/'>Trang chủ</Link></li>
                    <li className='cool-link '><Link to='/about'>Giới thiệu</Link></li>
                    <li className='cool-link '><Link to='/services'>Dịch vụ</Link></li>
                    <li className='cool-link '><Link to='/products'>Sản phẩm</Link></li>
                    <li className='cool-link '><Link to='/contact'>Liên hệ</Link></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </nav>
      </div>
    )
  }

}

export default Nav

