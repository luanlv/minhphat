// /* global $ */
import { provideHooks } from 'redial'
import React from 'react'
import { connect } from 'react-redux'
import { loadData } from '../actions'
import Helmet from 'react-helmet'
// import {Link} from 'react-router'

const redial = {
  fetch: ({ dispatch }) => dispatch(loadData())
}

const mapStateToProps = state => ({
  tree: state
})

class HomePage extends React.Component {
  // eslint-disable-next-line
  constructor (props) {
    super(props)
  }

  componentDidMount () {

  }

  render () {
    return (
      <div >
        <Helmet title='About us' />

        <section id='contact_form' className='p-t-60 p-b-100'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 p-b-10'>
                <div className='heading'>
                  <div className='heading_border bg_red' />
                  <h2>ĐỂ LẠI TIN NHẮN CHO CHÚNG TÔI</h2>
                </div>
                <div className='row p-t-40'>
                  <form id='contact-form' >
                    <div className='col-md-12'><div id='result' /></div>
                    <div className='col-md-6 col-sm-6'>
                      <div className='single-query'>
                        <input type='text' placeholder='Your Name' className='keyword-input' required name='name' id='name' />
                      </div>
                    </div>
                    <div className='col-md-6 col-sm-6'>
                      <div className='single-query'>
                        <input type='email' placeholder='Email Address' className='keyword-input' required name='email' id='email' />
                      </div>
                    </div>
                    <div className='col-md-6 col-sm-6'>
                      <div className='single-query'>
                        <input type='text' placeholder='Phone Number' className='keyword-input' name='phone' id='phone' />
                      </div>
                    </div>
                    <div className='col-md-6 col-sm-6'>
                      <div className='single-query'>
                        <input type='text' placeholder='Subject' className='keyword-input' name='subject' />
                      </div>
                    </div>
                    <div className='col-md-12'>
                      <div className='single-query'>
                        <textarea placeholder='Massege' name='message' id='message' required='required' />
                      </div>
                    </div>
                    <div className='col-md-12'>
                      <button type='submit' className='btn-light button-black' id='btn_submit' name='btn_submit'>Submit</button>
                    </div>
                  </form>
                </div>
              </div>

              <div className='col-md-4 col-sm-8 colxs-12'>
                <div className='form_left'>
                  <h3>LIÊN HỆ</h3>
                  <div className='textwidget'>
                    <p>
                      <strong>MINH PHAT LOGISTICS LOGISTICS AND PACKING</strong>
                      <br />
                      <strong>Địa chỉ:&nbsp;</strong>
                         Tầng 7 Tòa nhà Sông Đà 9, Đường Phạm Hùng, Phường Mỹ Đình 2 , Quận Nam Từ Liêm, Hà Nội, Việt Nam
                      <strong>SDT:</strong> 0432019595<br />
                      <strong>Fax:</strong> 0432019595<br />
                      <strong>Email:</strong> hiendv@minhphatlogistics.com.vn
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default provideHooks(redial)(connect(mapStateToProps)(HomePage))

