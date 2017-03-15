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
        <Helmet title='Services' />

        <section id='solution' className='p-t-100 p-b-100'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-3 col-sm-12 col-xs-12'>

                <div className='solution_tabs'>
                  <h3>Các dịch vụ của Minh Phát</h3>
                  <ul>
                    <li className='active'><a href='#'>Tất cả các dịch vụ</a></li>
                    <li><a href='#'>Thủ tục hải quan</a></li>
                    <li><a href='#'>Vận chuyển hàng không</a></li>
                    <li><a href='#'>Vận chuyển đường biển</a></li>
                    <li><a href='#'>Vận chuyển Bắc Nam</a></li>
                    <li><a href='#'>Nâng hạ máy móc và hàng dự án</a></li>
                    <li><a href='#'>Đóng kiện gỗ</a></li>
                  </ul>
                </div>
              </div>

              <div className='col-md-9 col-sm-12 col-xs-12'>

                <div className='row'>

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

