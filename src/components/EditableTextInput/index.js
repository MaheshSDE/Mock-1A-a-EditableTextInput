import {Component} from 'react'

import './index.css'

class EditableTextInput extends Component {
  state = {
    inputText: '',
    isParagraph: false,
  }

  onChangeInputText = event => {
    this.setState({inputText: event.target.value})
  }

  onClickButton = () => {
    const {isParagraph} = this.state
    this.setState({isParagraph: !isParagraph})
  }

  render() {
    const {inputText, isParagraph} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Editable Text Input </h1>
          <div className="input-button-container">
            {isParagraph ? (
              <p className="description">{inputText}</p>
            ) : (
              <input
                type="text"
                className="input-style"
                value={inputText}
                onChange={this.onChangeInputText}
              />
            )}
            {isParagraph ? (
              <button
                type="button"
                className="button"
                onClick={this.onClickButton}
              >
                Edit
              </button>
            ) : (
              <button
                type="button"
                className="button"
                onClick={this.onClickButton}
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default EditableTextInput
