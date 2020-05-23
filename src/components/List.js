import React from "react"
import { Link } from "gatsby"

class List extends React.Component {
  render() {
    return (
      <div>
        <Link to={`/lists/${this.props.list.id}`}>{this.props.list.name}</Link>
      </div>
    )
  }
}

export default List
