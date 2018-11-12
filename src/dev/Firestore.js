import React, { Component } from 'react'

import { firestore } from '../firebase'

export default class Firestore extends Component {
  state = {
    title: '',
    releaseDate: '',
    writer: '',
    category: '',
  }

  inputReset = () => {
    const resetState = Object.keys(this.state).reduce(
      (acc, key) => ({ ...acc, [key]: '' }),
      {}
    )
    this.setState(resetState)
  }

  addCollection = () => {
    firestore
      .collection('books')
      .add(this.state)
      .then(() => {
        console.log('Document successfully written!')
        this.inputReset()
      })
  }

  handleInputChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <div>
          <span>제목 : </span>
          <input
            type="text"
            value={this.state.title}
            name="title"
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <span>출간일 : </span>
          <input
            type="date"
            value={this.state.releaseDate}
            name="releaseDate"
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <span>저자 : </span>
          <input
            type="text"
            value={this.state.writer}
            name="writer"
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <span>분야 : </span>
          <input
            type="text"
            value={this.state.category}
            name="category"
            onChange={this.handleInputChange}
          />
        </div>
        <button onClick={this.addCollection}>ADD COLLECTION</button>
      </div>
    )
  }

  componentDidMount() {
    console.log('firestore :', firestore)
  }
}
