import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

class Word extends React.Component {
  constructor(props) {
    super(props)
    this.handleShowDefinition = this.handleShowDefinition.bind(this)
  }

  handleShowDefinition() {
    document.getElementsByClassName("definition")[0].classList.remove("hidden")
    document
      .getElementsByClassName("show-definition")[0]
      .classList.add("hidden")
  }

  render() {
    return (
      <div>
        <h1>{this.props.word}</h1>
        <p className="definition hidden">{this.props.definition}</p>
        <p className="show-definition note">
          <a href="javascript:void(0);" onClick={this.handleShowDefinition}>
            Show Definition
          </a>
        </p>
        <button onClick={this.props.handleCorrect}>Correct</button>
        <button onClick={this.props.handleIncorrect}>Incorrect</button>
      </div>
    )
  }
}

Word.propTypes = {
  word: PropTypes.string.isRequired,
  definition: PropTypes.string.isRequired,
  handleCorrect: PropTypes.func.isRequired,
  handleIncorrect: PropTypes.func.isRequired,
}

export default Word
