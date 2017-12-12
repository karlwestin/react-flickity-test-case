import React, { Component } from 'react'
import './App.css'
import Flickity from '@jamesbliss/react-flickity'

const randomItem = () => ({
  key: 'item-' + Math.random().toString().slice(2),
  title: 'Title ' + Math.random().toString().slice(2, 5)
})

class App extends Component {
  constructor () {
    super()

    // Generate a few carousel items
    this.state = {
      items: [
        randomItem(),
        randomItem(),
        randomItem(),
        randomItem()
      ]
    }
  }

  render () {
    // Add an element in the beginning of carousel:
    const addButton = () => {
      const buttons = [
        randomItem(),
        ...this.state.items
      ]
      this.setState({'items': buttons})
    }

    return (
      <div className='App'>
        <Flickity options={{contain: true, pageDots: false}}>
          {this.state.items.map(item => (
            <div key={item.key} style={{width: '200px', border: '1px solid #ff00ff'}}>
              <h2>{item.title}</h2>
            </div>
          ))}
        </Flickity>

        <button onClick={addButton}>Add Element</button>
      </div>
    )
  }
}

export default App
