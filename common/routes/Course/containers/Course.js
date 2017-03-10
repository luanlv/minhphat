/* global $ */
import { provideHooks } from 'redial'
import React from 'react'
import { connect } from 'react-redux'
import { loadData } from '../actions'
// import Helmet from 'react-helmet'
import {Link} from 'react-router'
import fn from '../../../components/Fn'
import CourseInfo from '../components/CourseInfo'
import Video from '../components/Video'

const redial = {
  fetch: ({ dispatch, params: { slug } }) => dispatch(loadData(slug))
}

const mapStateToProps = state => ({
  tree: state
})

class Course extends React.Component {
  // eslint-disable-next-line
  constructor (props) {
    super(props)
    this.state = {
      tab: 1
    }
    console.log('constructor Course Page')
  }

  componentDidMount () {
    $('.special.cards .image').dimmer({
      on: 'hover'
    })

    $('.ui.rating')
      .rating('disable')

    $('.ui.accordion')
      .accordion({exclusive: false})
  }
  render () {
    if (!(this.props.tree.course.ok && this.props.tree.videos.ok)) {
      return <div style={{marginTop: '100px'}}>Loading</div>
    } else {
      var this2 = this
      var videoBySlug = fn.findVideoBySlug(this.props.tree.videos.value, this.props.params.slug, this.props.params.videoSlug)
      var linkVideo = ((videoBySlug.source === 'anabim') ? ('http://video.vnguy.com/?v=' + fn.fixVideo(videoBySlug.link)) : ('https://www.youtube.com/embed/' + videoBySlug.link + '?autoplay=1'))
      console.log(linkVideo)
      var button = (Data.user.member === 'pending') ? (
        <button className='ui large orange button'
          onClick={function () {
            $('#membership-info').modal('show')
          }}
        >Thông tin đăng ký</button>
        ) : (
          <button className='ui large orange button '
            onClick={function () {
              if (Data.user.id.length === 0) {
                $('#dang-ky')
                  .modal('show')
              } else {
                if (Data.user.member === 'none' || Data.user.member === 'trialed' || Data.user.member === 'membershiped') {
                  $('.first.modal')
                    .modal('show')
                }
              }
            }}
          >Đăng ký học ngay</button>
        )
      let course = this.props.tree.course.value
      let videos = this.props.tree.videos.value
      return (
        <div id='main'>
          {(Data.user.member !== 'membership') ? (
            <div className='ui segment noBor noRa noSha noMa' style={{backgroundColor: 'teal !important'}}>
              <div className='ui container '>
                <div className='ui column stackable grid'>
                  <div className='ten wide column'>
                    <div style={{color: 'white'}} />
                  </div>
                  <div className='six wide column'>
                    <div className='row centerInside'>
                      { button }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ) : ('')
          }
          <div className='ui segment noBor noRa noSha noMa' style={{backgroundColor: 'white !important'}}>
            <div className='ui container '>
              <div className='ui column  grid'>
                <div className='sixteen wide column'>
                  <div className='ui breadcrumb'>
                    <Link to='/' >Trang chủ</Link>
                    <div className='divider'> /</div>
                    Danh mục: {course.categories.map(function (el, index) {
                      return [<Link to={'/category/' + el.slug} key={index}> [{el.name}] </Link>]
                    })
                    }
                  </div>
                  <Link to={'/course/' + course.slug}><h1 className='noMa' style={{marginBottom: '10px !important'}}>
                    {course.name} </h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='ui segment noBor noRa noSha noMa'
            style={{backgroundColor: '#e5e5e5 !important', padding: '0px !important'}}>
            <div className='ui container '>
              <div className='ui column  stackable grid'>
                <div className='eleven wide column' style={{paddingTop: '0 !important'}}>
                  <div className='row'>
                    <Video video={videoBySlug} user={this.props.tree.user} linkVideo={linkVideo} button={button} />
                  </div>
                  <CourseInfo course={course} />
                </div>
                <div className='five wide column ' style={{paddingLeft: '0 !important'}}>

                  <div className='ui segment noPa noBor noSha course-info'>
                    <div className='tabs ui top attached tabular menu'>
                      <a className='item active' data-tab='first'>Video khóa học</a>
                      <a className='item' data-tab='second'>Bình luận</a>
                    </div>
                    <div className='ui bottom attached tab segment active noPa' data-tab='first'>
                      <div className='ui styled fluid accordion'>
                        {course.section.map(function (el, index) {
                          return [
                            <div className='title active' style={{background: 'rgba(100, 100, 100, 0.1)'}}>
                              <i className=' dropdown icon' />
                              {el}
                            </div>,
                            <div className='content active'>
                              <div className='ui relaxed divided list course-list'>
                                {videos.filter(function (el) {
                                  return el.section === index
                                }).map(function (video, index) {
                                  return (
                                    <Link to={'/course/' + course.slug + '/' + video.url} key={index}
                                      className='item'
                                      onClick={function () {
                                        this2.redraw()
                                      }}
                                    >
                                      {(video.kind === 'free') ? (<i className=' play middle aligned icon' />) : (
                                        <i className=' lock middle aligned icon' />)}
                                      <div className='content'>
                                        <h4 className='header'>{video.name}</h4>
                                        <div className='description'>{fn.secondToMinuteSecond(video.time)}</div>
                                      </div>
                                    </Link>
                                  )
                                })
                                }
                              </div>
                            </div>
                          ]
                        })
                        }

                      </div>
                    </div>
                    <div className='ui bottom attached tab segment' data-tab='second'>
                      comment
                    </div>
                  </div>

                  <div className='ui segment noPa'>
                    <h3 className='ui top attached  header noBor noMa'
                      style={{border: '2px solid transparent !important'}}
                    >Khóa học liên quan</h3>
                    <div className='ui attached celled list  noBor noMa related-courses'
                      style={{background: 'white', borderRadius: '0 0 5px 5px'}}>
                      {course.relatedCourse.map(function (el, index) {
                        return (
                          <div className='item' key={index}>
                            <div className='ui avatar index-card-wr'>
                              <div className='index-card-text'>
                                <div>
                                  <p>{el.name}</p>
                                  <div className='card-text'>Cấp độ {el.level}</div>
                                  <div className='card-button'>
                                    <Link to={'/course/' + el.slug}>
                                      <button className='ui inverted button'>
                                        <i className='play icon' />
                                        Xem khóa học
                                      </button>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <img className='ui fluid rounded image'
                                src={'/image/get/' + el.cover.path}
                                style={{height: '140px'}} />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='ui segment'>
            <div className='ui container'>
              fb
            </div>
          </div>

        </div>
      )
    }
  }

  redraw () {
    this.setState({})
  }
}

export default provideHooks(redial)(connect(mapStateToProps)(Course))

let Data = {}
Data.baseUrl = ''
Data.user = {
  id: ''
}
