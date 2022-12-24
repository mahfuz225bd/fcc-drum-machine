import React, { Component, createRef, Fragment } from 'react'

import './App.css';

import Key from './components/Key';
import KeyPad from './components/KeyPad';

const initData = [{
  "value": "A",
  "soundName": "Untitled",
  "isPlaying": false,
  "audioSrc": "./sounds/boom.wav"
}, {
  "value": "S",
  "soundName": "Untitled",
  "isPlaying": false,
  "audioSrc": "./sounds/boom.wav"
}, {
  "value": "D",
  "soundName": "Untitled",
  "isPlaying": false,
  "audioSrc": "./sounds/boom.wav"
}, {
  "value": "F",
  "soundName": "Untitled",
  "isPlaying": false,
  "audioSrc": "./sounds/boom.wav"
}, {
  "value": "G",
  "soundName": "Untitled",
  "isPlaying": false,
  "audioSrc": "./sounds/boom.wav"
}, {
  "value": "H",
  "soundName": "Untitled",
  "isPlaying": false,
  "audioSrc": "./sounds/boom.wav"
}, {
  "value": "J",
  "soundName": "Untitled",
  "isPlaying": false,
  "audioSrc": "./sounds/boom.wav"
}, {
  "value": "K",
  "soundName": "Untitled",
  "isPlaying": false,
  "audioSrc": "./sounds/boom.wav"
}, {
  "value": "L",
  "soundName": "Untitled",
  "isPlaying": false,
  "audioSrc": "./sounds/boom.wav"
}]

class App extends Component {
  state = {
    data: [...initData],
    pressedKey: ''
  }

  audioRef = createRef()

  releaseAllKeys() {
    const newData = [...this.state.data]
    newData.map(each => each.isPlaying = false)
    this.setState({ data: newData })
  }

  componentDidMount() {
    window.addEventListener('keyup', (e) => {
      // set state: pressedKey
      this.setState({ pressedKey: String.fromCharCode(e.keyCode).toUpperCase() })
    })
  }

  componentDidUpdate() {
    const { data, pressedKey } = this.state

    if (pressedKey) {
      const newData = []
      data.forEach(each => {
        if (each.value === pressedKey) {
          each.isPlaying = true
        } else {
          each.isPlaying = false
        }
        newData.push(each)
      })

      //set state: data=newData, pressedKey=''
      this.setState({ data: newData, pressedKey: '' })

      // paly sound
      const getObj = data.filter(each => each.value === pressedKey && each.isPlaying)[0] || {}
      this.playSound(getObj.audioSrc)

      setTimeout(() => {
        this.releaseAllKeys()
      }, 100);
    }
  }

  playSound(src) {
    const audio = new Audio(src)
    audio.play()
  }

  render() {
    const { data } = this.state
    return (<Fragment>
      <KeyPad>
        {data.map((eachKey, index) => {
          return <Key value={eachKey.value} soundName={eachKey.soundName} isPlaying={eachKey.isPlaying} key={index} />
        })}
      </KeyPad>
    </Fragment>)
  }
}

export default App;
