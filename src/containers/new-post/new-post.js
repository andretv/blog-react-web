import React, { Component } from 'react'

import './new-post.scss'

// components
import TextField from 'components/text-field'

class NewPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      content: '',
    }
  }

  handleInputChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { title, content } = this.state

    return (
      <div className='new-post'>
        <TextField
          name='title'
          label='title'
          value={title}
          onChange={this.handleInputChange}
        />
        <TextField
          name='content'
          label='content'
          value={content}
          onChange={this.handleInputChange}
        />
      </div>
    )
  }
}

export default NewPost