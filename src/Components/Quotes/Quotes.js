import React, {Component} from "react"; 
import "./Quotes.css";

class Quotes extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hover: false }
  }
  
  handleMouseIn() {
    this.setState({ hover: true })
  }
  
  handleMouseOut() {
    this.setState({ hover: false })
  }
  
  render() {
    const tooltipStyle = {
      display: this.state.hover ? 'block' : 'none'
    }
    
    return (
      <div>
        <div className="quote" onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>
          Talk is cheap. Show me the code.
        </div>
        <div>
          <div className="quote" style={tooltipStyle}>Things aren’t always #000000 and #FFFFFF!</div>
        </div>
      </div>
    );
  }
}

export default Quotes;