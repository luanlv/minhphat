import React from 'react'
import {Link} from 'react-router'

class Slider extends React.Component {
  render () {
    return (
      <section className='rev_slider_wrapper'>
        <div id='rev_slider' className='rev_slider' data-version='5.0'>
          <ul>
            <li data-transition='fade'>
              <img src='/assets/images/finance/bannar_1.jpg' alt='' data-bgposition='center center' data-bgfit='cover' />
              <h1 className='tp-caption tp-resizeme p-56'
                data-x='left'
                data-y='280'
                data-width='full'
                data-transform_idle='o:1;'
                data-transform_in='y:[-200%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;'
                data-transform_out='auto:auto;s:1000;e:Power3.easeInOut;'
                data-mask_in='x:0px;y:0px;s:inherit;e:inherit;' data-mask_out='x:0;y:0;s:inherit;e:inherit;'
                data-start='700'>
                <span className='p-w-300'>Welcome</span>
              </h1>
              <h1 className='tp-caption  tp-resizeme p-56'
                data-x='left'
                data-y='340'
                data-width='full'
                data-transform_idle='o:1;'
                data-transform_in='y:[-200%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;'
                data-transform_out='auto:auto;s:1000;e:Power3.easeInOut;'
                data-mask_in='x:0px;y:0px;s:inherit;e:inherit;'
                data-mask_out='x:0;y:0;s:inherit;e:inherit;'
                data-start='500'>
                <span className='color_red text_bold'>Minh Phat</span>
                <span className='p-w-300'>Logistics</span>
              </h1>
              <div
                className='tp-caption  tp-resizeme'
                data-x='left'
                data-y='433'
                data-width='full'
                data-transform_idle='o:1;'
                data-transform_in='y:[-200%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;'
                data-transform_out='auto:auto;s:1000;e:Power3.easeInOut;'
                data-mask_in='x:0px;y:0px;s:inherit;e:inherit;'
                data-mask_out='x:0;y:0;s:inherit;e:inherit;'
                data-start='1000'>
                <p className='p_20'>Hệ thống vận tải chuyên nghiệp – uy tín – chất lượng.</p>
              </div>
              <div className='tp-caption  tp-resizeme'
                data-x='left'
                data-y='490'
                data-width='full'
                data-transform_idle='o:1;'
                data-transform_in='y:[-200%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;'
                data-transform_out='auto:auto;s:1000;e:Power3.easeInOut;'
                data-mask_in='x:0px;y:0px;s:inherit;e:inherit;'
                data-mask_out='x:0;y:0;s:inherit;e:inherit;'
                data-start='1500'>
                <Link to='/services' className='btn-light'>Dịch vụ</Link>
                <Link to='/contact' className='btn-dark button-black'>Liên hệ</Link>
              </div>
            </li>
            <li data-transition='fade'> <img src='/assets/images/finance/bannar_3.jpg' alt='' data-bgposition='center center' data-bgfit='cover' />

              <h1 className='tp-caption  tp-resizeme p-56'
                data-x='left'
                data-y='330'
                data-width='full'
                data-transform_idle='o:1;'
                data-transform_in='y:[-200%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;'
                data-transform_out='auto:auto;s:1000;e:Power3.easeInOut;'
                data-mask_in='x:0px;y:0px;s:inherit;e:inherit;'
                data-mask_out='x:0;y:0;s:inherit;e:inherit;'
                data-start='800'>
                <span className='color_red text_bold'>DỊCH VỤ NHANH NHẤT</span>
              </h1>
              <div className='tp-caption  tp-resizeme'
                data-x='left'
                data-y='400'
                data-width='full'
                data-transform_idle='o:1;'
                data-transform_in='y:[-200%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;'
                data-transform_out='auto:auto;s:1000;e:Power3.easeInOut;'
                data-mask_in='x:0px;y:0px;s:inherit;e:inherit;'
                data-mask_out='x:0;y:0;s:inherit;e:inherit;'
                data-start='800'>
                <p className='p_20 color_white'>Không ngừng phát triển dịch vụ vận tải, chúng tôi cam kết mang đến cho quý khách hàng một dịch vụ chuyển nghiệp nhất.</p>
              </div>
              <div className='tp-caption  tp-resizeme'
                data-x='left'
                data-y='480'
                data-width='full'
                data-transform_idle='o:1;'
                data-transform_in='y:[-200%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;'
                data-transform_out='auto:auto;s:1000;e:Power3.easeInOut;'
                data-mask_in='x:0px;y:0px;s:inherit;e:inherit;'
                data-mask_out='x:0;y:0;s:inherit;e:inherit;'
                data-start='800'>
                <Link to='/services' className='btn-light'>Dịch vụ</Link>
                <Link to='/contact' className='btn-dark button-black'>Liên hệ</Link>
              </div>

            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Slider
