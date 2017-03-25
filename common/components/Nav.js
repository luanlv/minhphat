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
    const isEn = this.props.isEn
    return (
      <div>
        <section id='header-top'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 col-sm-4 col-xs-12 p-0' >
                {isEn ? (<p className='p_15 p-white p-t-10' style={{fontSize: '12px !important'}}>MINH PHAT LOGISTICS VIETNAM JOINT STOCK COMPANY</p>)
                  : (<p className='p_15 p-white p-t-10' style={{fontSize: '12px !important'}}>CÔNG TY CỔ PHẦN MINH PHAT LOGISTICS VIỆT NAM</p>)
                }
              </div>
              <div className='col-md-8 col-sm-8 col-xs-12 text-right p-0'>
                <div className='header-top-links'>
                  <div className='social-icons text-right'>
                    <ul>
                      <li>
                        <a href='http://minhphatlogistics.com.vn' hrefLang='vi'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFsSURBVHjaYvzPgAD/UNlYEUAAmuTYAAAQhAEYqF/zFbe50RZ1cMmS9TLi0pJLRjZohAMTGFUN9HdnHgEE1sDw//+Tp0ClINW/f4NI9d////3+f+b3/1+////+9f/XL6A4o6ws0AaAAGIBm/0fRTVQ2v3Pf97f/4/9Aqv+DdHA8Ps3UANAALEAMSNQNdDGP3+ALvnf8vv/t9//9X/////7f+uv/4K//iciNABNBwggsJP+/IW4kuH3n//1v/8v+wVSDURmv/57//7/CeokoKFA0wECiAnkpL9/wH4CO+DNr/+VQA1A9PN/w6//j36CVIMRxEkAAQR20m+QpSBXgU0CuSTj9/93v/8v//V/xW+48UBD/zAwAAQQSAMzOMiABoBUswCd8ev/M7A669//OX7///Lr/x+gBlCoAJ0DEEAgDUy//zBISoKNAfoepJNRFmQkyJecfxj4/kDCEIiAigECiPErakTiiWMIAAgwAB4ZUlqMMhQQAAAAAElFTkSuQmCC' title='Tiếng Việt' alt='Tiếng Việt' /></a>
                      </li>
                      <li>
                        <a href='http://en.minhphatlogistic.com.vn' hrefLang='en-US'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHzSURBVHjaYkxOP8IAB//+Mfz7w8Dwi4HhP5CcJb/n/7evb16/APL/gRFQDiAAw3JuAgAIBEDQ/iswEERjGzBQLEru97ll0g0+3HvqMn1SpqlqGsZMsZsIe0SICA5gt5a/AGIEarCPtFh+6N/ffwxA9OvP/7//QYwff/6fZahmePeB4dNHhi+fGb59Y4zyvHHmCEAAAW3YDzQYaJJ93a+vX79aVf58//69fvEPlpIfnz59+vDhw7t37968efP3b/SXL59OnjwIEEAsDP+YgY53b2b89++/awvLn98MDi2cVxl+/vl6mituCtBghi9f/v/48e/XL86krj9XzwEEEENy8g6gu22rfn78+NGs5Ofr16+ZC58+fvyYwX8rxOxXr169fPny+fPn1//93bJlBUAAsQADZMEBxj9/GBxb2P/9+S/R8u3vzxuyaX8ZHv3j8/YGms3w8ycQARmi2eE37t4ACCDGR4/uSkrKAS35B3TT////wADOgLOBIaXIyjBlwxKAAGKRXjCB0SOEaeu+/y9fMnz4AHQxCP348R/o+l+//sMZQBNLEvif3AcIIMZbty7Ly6t9ZmXl+fXj/38GoHH/UcGfP79//BBiYHjy9+8/oUkNAAHEwt1V/vI/KBY/QSISFqM/GBg+MzB8A6PfYC5EFiDAABqgW776MP0rAAAAAElFTkSuQmCC' title='English' alt='English' /></a>
                      </li>
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
                  <div className='addressbox' >
                    <div className='get-tuch text-left'><i className='icon-telephone114 color_red' />
                      <ul>
                        <li><h4>Hotline</h4></li>
                        <li><p className='p_14'>043.201.9595</p></li>
                      </ul>
                    </div>
                    <div className='get-tuch text-left'><i className='icon-icons74 color_red' />
                      <ul>
                        {isEn ? (<li><h4>Working Time</h4></li>)
                          : (<li><h4>Thời gian làm việc</h4></li>)
                        }
                        <li><p className='p_14'>08:00 - 17:00</p></li>
                      </ul>
                    </div>
                    <div className='get-tuch text-left'><i className='icon-alarmclock color_red' />
                      <ul>
                        <li><h4>Email</h4></li>
                        <li><p className='p_14'>hiendv@minhphatlogistics.com.vn</p></li>
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
                  {isEn ? (<ul className='nav navbar-nav navbar-left' data-in='fadeInDown' data-out='fadeOutUp'>
                    <li className='dropdown cool-link '><Link to='/'>Home</Link></li>
                    <li className='cool-link '><Link to='/about'>About Us</Link></li>
                    <li className='dropdown cool-link'>
                      <Link to='/services' className='dropdown-toggle' data-toggle='dropdown' >Services</Link>
                      <ul className='dropdown-menu animated fadeOutUp' style={{display: 'none', opacity: 1}} >
                        {this.props.props.tree.services.value.map((el, index) => {
                          return (
                            <li key={index}><Link to={'/services/' + el.slug}>{el.title}</Link></li>
                          )
                        })}
                      </ul>
                    </li>
                    <li className='dropdown cool-link'>
                      <Link to='/products' className='dropdown-toggle' data-toggle='dropdown' >Products</Link>
                      <ul className='dropdown-menu animated fadeOutUp' style={{display: 'none', opacity: 1}} >
                        {this.props.props.tree.products.value.map((el, index) => {
                          return (
                            <li key={index}><Link to={'/products/' + el.slug}>{el.title}</Link></li>
                          )
                        })}
                      </ul>
                    </li>
                    <li className='dropdown cool-link'>
                      <Link to='/news' >News</Link>
                    </li>
                    <li className='cool-link '><Link to='/contact'>Contact</Link></li>
                  </ul>)
                    : (<ul className='nav navbar-nav navbar-left' data-in='fadeInDown' data-out='fadeOutUp'>
                      <li className='dropdown cool-link '><Link to='/'>Trang chủ</Link></li>
                      <li className='cool-link '><Link to='/about'>Giới thiệu</Link></li>
                      <li className='dropdown cool-link'>
                        <Link to='/services' className='dropdown-toggle' data-toggle='dropdown' >Dịch vụ</Link>
                        <ul className='dropdown-menu animated fadeOutUp' style={{display: 'none', opacity: 1}} >
                          {this.props.props.tree.services.value.map((el, index) => {
                            return (
                              <li key={index}><Link to={'/services/' + el.slug}>{el.title}</Link></li>
                            )
                          })}
                        </ul>
                      </li>
                      <li className='dropdown cool-link'>
                        <Link to='/products' className='dropdown-toggle' data-toggle='dropdown' >Sản phẩm</Link>
                        <ul className='dropdown-menu animated fadeOutUp' style={{display: 'none', opacity: 1}} >
                          {this.props.props.tree.products.value.map((el, index) => {
                            return (
                              <li key={index}><Link to={'/products/' + el.slug}>{el.title}</Link></li>
                            )
                          })}
                        </ul>
                      </li>
                      <li className='dropdown cool-link'>
                        <Link to='/news' >Tin tức</Link>
                      </li>
                      <li className='cool-link '><Link to='/contact'>Liên hệ</Link></li>
                    </ul>)
                  }
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

