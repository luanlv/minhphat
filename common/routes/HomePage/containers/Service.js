import React from 'react'

export default class Service extends React.Component {
  render () {
    return (
      <section id='s_services' className='p-t-100 p-b-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='heading'>
                <div className='heading_border bg_red' />
                <h2>Dịch vụ <span className='color_red'>MINH PHÁT</span></h2>
              </div>
            </div>
          </div>

          <div className='row p-t-35 m-b-110'>
            <div className='col-md-12'>

              <div id='services_slider' className='owl-carousel'>

                <div className='item'>
                  <div className='services'>
                    <div className='image_s'>
                      <a href='services.html'>
                        <img src='/assets/images/finance/sevices_4.jpg' alt='Owl Image' /></a>
                    </div>
                    <h3 className='text-uppercase'><span>1</span>Vận chuyển hàng không</h3>
                    <p>Minh Phát Logistics and Packing là đại lý của các hãng hàng không Vietnam Airlines, Singapore Airlines, China Airline, Asiana Airlines, Qatar Airlines,… Với hệ thống đại lý rộng khắp, Minh Phát Logistics and Packing luôn sẵn.</p>
                    <a href='services.html'>Chi tiết</a>
                  </div>
                </div>

                <div className='item'>
                  <div className='services'>
                    <div className='image_s'>
                      <a href='services.html'>
                        <img src='/assets/images/finance/sevices_2.jpg' alt='Owl Image' /></a>
                    </div>
                    <h3 className='text-uppercase'><span>2</span>NÂNG HẠ MÁY MÓC & HÀNG</h3>
                    <p>Minh Phát Logistics and Packing đang sở hữu các loại xe nâng, xe cẩu và xe cẩu tự hành và các trang thiết bị hiện đại. Bên cạnh đó là đội ngũ nhân viên lành nghề, nhiệt huyết cùng các chuyên gia giàu.</p>
                    <a href='services.html'>Chi tiết</a>
                  </div>
                </div>

                <div className='item'>
                  <div className='services'>
                    <div className='image_s'>
                      <a href='services.html'>
                        <img src='/assets/images/finance/sevices_3.jpg' alt='Owl Image' /></a>
                    </div>
                    <h3 className='text-uppercase'><span>3</span>VẬN CHUYỂN ĐƯỜNG BIỂN</h3>
                    <p>Với hệ thống đại lý là các master consolidator hàng đầu tại các cảng chuyển tải, Blue express jsc  cung cấp dịch vụ LCL an toàn, hiệu quả và cạnh tranh về giá cho các lô hàng LCL từ cảng Hồ.</p>
                    <a href='services.html'>Chi tiết</a>
                  </div>
                </div>

                <div className='item'>
                  <div className='services'>
                    <div className='image_s'>
                      <a href='services.html'>
                        <img src='/assets/images/finance/sevices_1.jpg' alt='Owl Image' /></a>
                    </div>
                    <h3 className='text-uppercase'><span>4</span>Thủ tục hải quan</h3>
                    <p>Với đội ngủ nhân viên chứng từ nhiệt huyết năng động, sẽ đáp ứng mọi như cầu của khách hàng.</p>
                    <a href='services.html'>Chi tiết</a>
                  </div>
                </div>

                <div className='item'>
                  <div className='services'>
                    <div className='image_s'>
                      <a href='services.html'>
                        <img src='/assets/images/finance/sevices_5.jpg' alt='Owl Image' /></a>
                    </div>
                    <h3 className='text-uppercase'><span>5</span>Vận chuyển Bắc Nam</h3>
                    <p>Đáp ứng mọi nhu cầu vận chuyển Băc - Nam với số lượng lớn, đảm bảo thời gian giao nhận, cũng như chất lượng dịch vụ.</p>
                    <a href='services.html'>Chi tiết</a>
                  </div>
                </div>

                <div className='item'>
                  <div className='services'>
                    <div className='image_s'>
                      <a href='services.html'>
                        <img src='/assets/images/finance/sevices_6.jpg' alt='Owl Image' /></a>
                    </div>
                    <h3 className='text-uppercase'><span>6</span>Đóng kiện gỗ</h3>
                    <p>Luôn đem đến dịch vụ tốt nhất đến tay khách hàng, với những kiện gỗ chắc chắn bền đẹp để phục vụ, giúp quý khách luôn an tâm.</p>
                    <a href='services.html'>Chi tiết</a>
                  </div>
                </div>

              </div>

            </div>
          </div>

          <div className='row' id='funfacts'>
            <div className='col-md-4 col-sm-4 col-xs-12'>
              <h2>Minh Phát <span className='color_red'>ấn tượng,</span><br /> với những con số.</h2>
            </div>
            <div className='col-md-8 col-sm-8 col-xs-12'>
              <div className='row text-center' id='counters'>
                <div className='col-md-3 col-xs-6'>
                  <div className='counter'>
                    <span className='quantity-counter1 highlight'>30</span>
                    <h6 className='counter-details'>Nhân Viên</h6>
                  </div>
                </div>
                <div className='col-md-3 col-xs-6'>
                  <div className='counter'>
                    <span className='quantity-counter2 highlight'>3</span>
                    <h6 className='counter-details'>Chi Nhánh</h6>
                  </div>
                </div>
                <div className='col-md-3 col-xs-6'>
                  <div className='counter'>
                    <span className='quantity-counter3 highlight'>100</span>
                    <h6 className='counter-details'>Chất Lượng</h6>
                  </div>
                </div>
                <div className='col-md-3 col-xs-6'>
                  <div className='counter'>
                    <span className='quantity-counter4 highlight'>114</span>
                    <h6 className='counter-details'>Đối Tác</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
