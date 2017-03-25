import React from 'react'
import {Link} from 'react-router'

export default class Service extends React.Component {

  render () {
    const isEn = this.props.isEn
    return (
      <section id='s_services' className='p-t-100 p-b-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='heading'>
                <div className='heading_border bg_red' />
                {isEn ? (<h2> <span className='color_red'>MINH PHÁT</span> Services</h2>) : (<h2>Dịch vụ <span className='color_red'>MINH PHÁT</span></h2>)}

              </div>
            </div>
          </div>

          <div className='row p-t-35 m-b-110'>
            <div className='col-md-12'>

              <div id='services_slider' className='owl-carousel'>
                {this.props.services.map((service, index) => {
                  return (
                    <div className='item' key={index}>
                      <div className='services'>
                        <div className='image_s'>
                          <Link to={'/services/' + service.slug}>
                            {service.cover && <img src={'/image/' + service.cover.path} alt='Owl Image' />}
                          </Link>
                        </div>
                        <h3 className='text-uppercase'><span>{index}</span>{service.title}</h3>
                        <p>{service.description}</p>
                        {isEn ? (<Link to={'/services/' + service.slug}>Detail</Link>) : (<Link to={'/services/' + service.slug}>Chi tiết</Link>)}
                      </div>
                    </div>
                  )
                })}

              </div>

            </div>
          </div>

        </div>
      </section>
    )
  }
}
