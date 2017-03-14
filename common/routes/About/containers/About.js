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

        <section id='solution' className='p-t-80'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='heading'>
                  <div className='heading_border bg_red' />
                  <h2><span className='color_red'>Giới thiệu</span></h2>
                  <p>Một số thông tin về Minh Phát</p>
                </div>
              </div>
            </div>

            <div className='row'>

              <div className='col-md-7 col-sm-7 col-xs-12'>
                <div className='row'>
                  <div className='textwidget' style={{padding: 10, fontSize: 16}}>
                    <p>Tên công ty : <strong>CÔNG TY CỔ PHẦN MINH PHAT  LOGISTICS</strong></p>
                    <p>Tên giao dịch : <strong>MINH PHAT LOGISTICS</strong></p>
                    <p>Địa chỉ: Tầng 7 Tòa nhà Sông Đà 9, Đường Phạm Hùng, Phường Mỹ Đình 2 , Quận Nam Từ Liêm, Hà Nội, Việt Nam</p>
                    <p>Điện thoại: 0432019595</p>
                    <p>Fax: 0432019595</p>
                    <p>Email: hiendv@minhphatlogistics.com.vn</p>
                    <p>MINH PHAT  LOGISTICS là một công ty cổ phần, 100% vốn đầu tư tư nhân được thành lập vào tháng …  năm …  với số vốn điều lệ … tỷ đồng. (Đang cập nhập)</p>
                    <br />
                    <p><strong>Lĩnh vực hoạt động:</strong></p>
                    <ul style={{listStyle: 'circle', paddingLeft: 20, marginTop: 5}}>
                      <li>Thủ tục hải quan</li>
                      <li>Vận chuyển quốc tế</li>
                      <li>Vận chuyển nội địa</li>
                      <li>Vận chuyển Bắc Nam</li>
                      <li>Nâng hạ máy móc, hàng dự án</li>
                      <li>Đóng gói hàng hóa</li>
                      <li>Sản xuất pallet gỗ và carton</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='col-md-5 col-sm-5 col-xs-12'>
                <div className='finance_about_page'>
                  <img src='/assets/img/gioi_thieu1.jpg' alt='image' className='img-responsive' />
                </div>
              </div>
            </div>
            <div className='row' style={{marginTop: 40}}>
              <div className='col-md-5 col-sm-5 col-xs-12'>
                <div className='finance_about_page'>
                  <img src='/assets/img/gioi_thieu2.jpg' alt='image' className='img-responsive' />
                </div>
              </div>

              <div className='col-md-7 col-sm-7 col-xs-12'>
                <div className='row'>
                  <div className='textwidget' style={{padding: 10, fontSize: 16}}>
                    <p><strong>Tầm nhìn:</strong> MINH PHAT  LOGISTICS Logistics and Packing sẽ trở thành công ty hàng đầu trong lĩnh vực Giao nhận, Đóng gói hàng và hàng dự án</p>
                    <br />
                    <p><strong>Sứ mệnh</strong>:</p>
                    <ul style={{listStyle: 'circle', paddingLeft: 20, marginTop: 5}}>
                      <li>Đối với khách hàng: trở thành đối tác ưa thích và đáng tin cậy nhất trong lĩnh vực Logistics, cung cấp cho khách hàng chất lượng sản phẩm và dịch vụ tốt nhất thông qua việc lấy một mối quan hệ cá nhân/khách hàng làm trung tâm.</li>
                      <li>Đối với nhân viên: Phát triển một môi trường làm việc chuyên nghiệp, năng động, sáng tạo và nhân văn, tạo điều kiện cho thu nhập cao và cơ hội phát triển bình đẳng cho tất cả nhân viên</li>
                      <li>Đối với môi trường: góp phần bảo vệ môi trường bằng cách sử dụng vật liệu tái chế, tái sử dụng và thân thiện với môi trường</li>
                    </ul>
                    <br />
                    <p><strong>Giá trị cốt lõi: </strong></p>
                    <ul style={{listStyle: 'circle', paddingLeft: 20, marginTop: 5}}>
                      <li><strong>Khách hàng là trên hết</strong><strong>:&nbsp;</strong>Những gì chúng tôi làm chỉ có giá trị khi chúng thật sự có lợi cho khách hàng và đồng nghiệp của chúng tôi</li>
                      <li><strong>Làm việc tập thể</strong><strong>:&nbsp;</strong>Tại MINH PHAT  LOGISTICS, bạn sẽ không có hiệu suất làm việc tốt mà không hợp tác.</li>
                    </ul>
                    <br />
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

