import React from 'react'
import axios from 'axios'

function createFormData(file) {
  const form = new FormData()
  form.append('file', file)
  return form
}

// const ws = new WebSocket('ws://localhost:8080')
//
// ws.onmessage = (e) => {
//   console.log(e.data)
// }

class App extends React.Component {
  inputRef = React.createRef()

  handleButtonClick = () => {
    this.inputRef.current.click()
  }

  handleUpload = async () => {
    const file = this.inputRef.current.files[0]
    const formData = createFormData(file)

    await axios.post('http://localhost:4000/upload-file', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Upload file</button>
        <input
          ref={this.inputRef}
          onChange={this.handleUpload}
          id="file"
          type="file"
          hidden
        />
      </div>
    )
  }
}

export default App
