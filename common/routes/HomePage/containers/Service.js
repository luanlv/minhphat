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
                    <p>MINH PHAT  LOGISTICS là đại lý của các hãng hàng không Vietnam Airlines, Singapore Airlines, China Airline, Asiana Airlines, Qatar Airlines,…</p>
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
                    <p>MINH PHAT  LOGISTICS đang sở hữu các loại xe nâng, xe cẩu và xe cẩu tự hành và các trang thiết bị hiện đại. Bên cạnh đó là đội ngũ nhân viên lành nghề, nhiệt huyết cùng các chuyên gia giàu ...</p>
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
                    <p>Với hệ thống đại lý là các master consolidator hàng đầu tại các cảng chuyển tải, MINH PHAT  LOGISTICS cung cấp dịch vụ LCL an toàn, hiệu quả ...</p>
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
                    <p>MINH PHAT  LOGISTICS sở hữu đội ngũ nhân viên chứng từ chuyên nghiệp trong việc khai báo hải quan, làm thủ tục và xin các giấy phép, chứng nhận theo quy định của nhà nước...</p>
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
                    <p>Đáp ứng nhu cầu vận chuyển hàng hoá ngày một lớn giữa các doanh nghiệp ở hai miền Nam – Bắc, MINH PHAT  LOGISTICS xây dựng sản phẩm dịch vụ door – door hàng lẻ (consol) trực tiếp hàng tuần, ...</p>
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
                    <p>Thế mạnh cạnh tranh của MINH PHAT  LOGISTICS so với các công ty forwarder khác đó là cung cấp dịch vụ đóng gói hàng hóa...</p>
                    <a href='services.html'>Chi tiết</a>
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
