// /* global $ */
import { provideHooks } from 'redial'
import React from 'react'
import { connect } from 'react-redux'
// import { loadData } from '../actions'
import Helmet from 'react-helmet'
// import {Link} from 'react-router'

const redial = {
  // fetch: ({ dispatch }) => dispatch(loadData())
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
                  <p>Contact Us</p>
                  <h2>WE WANT TO <span className='color_red'>HEAR FROM YOU</span></h2>
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

                <div className='form_left p-b-80'>
                  <h3 className='text-uppercase'><span>2</span>Contact Information</h3>
                  <p>Benenatis mauris Vestibulum ante ipsum primis in industry, logistics, finance, business orci ultrices venenatis mauris. It is a long established fact that a reader will be distracted. </p>
                </div>

                <div className='form_left p-b-80'>
                  <h3 className='text-uppercase'><span>1</span>Get in Touch</h3>
                  <div className='footer_1_contact'>
                    <p><i className='icon-telephone114' />+1(123) 456 7890 - 1</p>
                    <br />
                    <p><i className=' icon-icons142' />hello@copious.com</p>
                    <br />
                    <p><i className='icon-icons20' />Mon to Fri - 08:00 to 16:30</p>
                    <br />
                    <i className='icon-icons74' />
                    <p>Manhattan Hall, Lacasa Ave Melbourne,
                    <br />124BP Australia</p>
                  </div>
                </div>

                <div className='form_left'>
                  <h3 className='text-uppercase'><span>3</span>Social Media</h3>
                  <p>Benenatis mauris Vestibulum ante ipsum primis in industry, logistics, finance, business.</p>
                  <div className='social-icons_1 p-t-30'>
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
          </div>
        </section>
      </div>
    )
  }
}

export default provideHooks(redial)(connect(mapStateToProps)(HomePage))

