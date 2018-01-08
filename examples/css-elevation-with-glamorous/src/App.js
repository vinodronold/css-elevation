import React, { Component } from 'react'
import glamorous from 'glamorous'
import { cssElevationObject } from 'css-elevation'
import './App.css'

const Box = glamorous.div(cssElevationObject({ z: 2 }), {
  padding: 30,
  margin: 20
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CSS Elevation</h1>
        </header>
        <Box />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
