import React from "react"
import WordPresenter from "./WordPresenter.js"

class ListPresenter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { wordLists: [] }
  }

  componentDidMount() {
    this.setState({
      wordLists: [
        {
          id: 0,
          name: "Temp",
          words: [],
        },
      ],
    })
  }

  render() {
    return (
      <div>
        {this.state.wordLists.map(list => (
          <WordPresenter key={list.id} list={list} />
        ))}
      </div>
    )
  }
}

export default ListPresenter
