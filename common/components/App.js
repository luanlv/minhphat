/* global */
import { provideHooks } from 'redial'
import { connect } from 'react-redux'
import React from 'react'
import Helmet from 'react-helmet'
import Nav from './Nav'
import Footer from './Footer'

const mapStateToProps = state => ({
  tree: state
})

class App extends React.Component {
  //  eslint-disable-next-line
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    // window.customMap()

  }
  render () {
    return (
      <div>
        <Helmet title='Trang chủ' titleTemplate='%s - Minh Phát Logistics' />
        <Nav props={this.props} />
        {this.props.children}
        <Footer />
      </div>
    )
  }

}

export default provideHooks()(connect(mapStateToProps)(App))

