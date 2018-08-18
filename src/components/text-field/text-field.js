import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './text-field.scss'

class TextField extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    label: PropTypes.string,
    password: PropTypes.bool,
  }

  constructor(props) {
    super(props)
  }

  handleFocus = () => {
    if (!/active/.test(this.refs['label'].className)) {
      this.refs['label'].className = this.refs['label'].className + ' active'
    }

    if (this.props.onFocus) {
      this.props.onFocus()
    }
  }

  handleBlur = () => {
    if (
      this.props.value.length === 0 &&
      /active/.test(this.refs['label'].className)
    ) {
      this.refs['label'].className = this.refs['label'].className.replace(/\sactive/, '')
    }

    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  render() {
    const {
      name,
      value,
      label,
      password,
    } = this.props

    const {
      onChange,
    } = this.props

    console.log(
      this.refs['label']
        ? this.refs['label'].className
        : ''
    )

    return (
      <div className='text-field-wrapper'>
        <label
          className='text-field-label'
          ref='label'
          htmlFor={name}
        >
          {label}
        </label>
        <input
          className='text-field-input'
          ref='input'
          type={
            password
              ? 'password'
              : 'text'
          }
          name={name}
          value={value}
          onChange={onChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </div>
    )
  }
}

export default TextField