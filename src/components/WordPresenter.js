import React from "react"
import Word from "./Word"
import WordList from "./word-list.js"
import Complete from "./Complete.js"

class WordPresenter extends React.Component {
  constructor(props) {
    super(props)
    this.handleCorrect = this.handleCorrect.bind(this)
    this.handleIncorrect = this.handleIncorrect.bind(this)
  }

  componentDidMount() {
    var wordListId = 0
    var index = Math.floor(Math.random() * WordList[wordListId].words.length)
    this.setState({ wordList: WordList[wordListId], currentWord: index })
  }

  handleAttempt(correct) {
    var index = this.state.currentWord
    var wordList = this.state.wordList

    if (correct) {
      wordList.words[index].complete = true
    }

    var incompleteWords = wordList.words.filter(function (word) {
      return !word.complete
    })

    var wordsLeft = incompleteWords.length
    if (wordsLeft > 0) {
      var randomIndex = Math.floor(Math.random() * wordsLeft)
      var nextCurrentWord = incompleteWords[randomIndex].id
      this.setState({ wordList: wordList, currentWord: nextCurrentWord })
    } else {
      this.setState({ finished: true })
    }

    this.resetDefinition()
  }

  handleCorrect() {
    this.handleAttempt(true)
  }

  handleIncorrect() {
    this.handleAttempt(false)
  }

  resetDefinition() {
    // TODO: this could be done better.
    document.getElementsByClassName("definition")[0].classList.add("hidden")
    document
      .getElementsByClassName("show-definition")[0]
      .classList.remove("hidden")
  }

  render() {
    if (!this.state) {
      return <div />
    } else if (this.state.finished) {
      return <Complete />
    } else {
      var word = this.state.wordList.words[this.state.currentWord]
      return (
        <Word
          word={word.word}
          definition={word.definition}
          handleCorrect={this.handleCorrect}
          handleIncorrect={this.handleIncorrect}
        />
      )
    }
  }
}

export default WordPresenter
