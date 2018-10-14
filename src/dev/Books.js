import React, { Component } from 'react'

import { firestore } from '../firebase'

export default class Books extends Component {
  state = {
    books: [],
  }

  add = () => {
    firestore
      .collection('books')
      .add({
        releaseDate: new Date(2012, 10, 12),
        category: '인문학',
        title: '어떤 책인가..',
        writer: '아무개',
      })
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id)
      })
      .catch(function(error) {
        console.error('Error adding document: ', error)
      })
  }

  update = id => {
    const updateRef = firestore.collection('books').doc(id)
    updateRef.set({
      title: 'update title',
    })
  }

  delete = id => {
    firestore
      .collection('books')
      .doc(id)
      .delete()
      .then(function() {
        console.log('Document successfully deleted!')
      })
      .catch(function(error) {
        console.error('Error removing document: ', error)
      })
  }

  render() {
    return (
      <ul>
        <li>
          <button onClick={this.add}>add</button>
        </li>
        {this.state.books.map(book => (
          <li key={book.id}>
            <span>{book.title}</span>
            <button onClick={() => this.delete(book.id)}>delete</button>
            <button onClick={() => this.update(book.id)}>update</button>
          </li>
        ))}
      </ul>
    )
  }

  componentDidMount() {
    firestore.collection('books').onSnapshot(querySnapshot => {
      const books = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      this.setState({ books })
    })
  }
}
