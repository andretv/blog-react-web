import React, { Component } from 'react'
import { connect } from 'react-redux'

class Feed extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>Feed</div>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Feed)