import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
  }
  
  handleChange = (e) =>{
    this.setState({
      message: e.target.value
    })
  }

  render() {
    let charLeft = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={e => this.handleChange(e)} type="text" name="message" id="message" value={this.state.message}/>
        <p>{charLeft} Characters Left</p>
      </div>
    );
  }
}

export default TwitterMessage;
