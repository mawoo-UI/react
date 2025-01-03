// function Welcom(props) {
//   return <h1>안녕, {props.name}</h1>
// }
import { Component } from "react";

class Welcom extends Component {
  render() {
    return <h1>안녕, {this.props.name}</h1>
  }
}
export default Welcom