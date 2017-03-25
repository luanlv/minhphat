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
    var isEn = this.props.tree.sourceRequest.host.slice(0, 3) === 'en.'
    return (
      <div>
        <Helmet titleTemplate='%s - Minh Phát Logistics' />
        <Nav props={this.props} isEn={isEn} />
        {this.props.children}
        <Footer isEn={isEn} />
      </div>
    )
  }

}

export default provideHooks()(connect(mapStateToProps)(App))

