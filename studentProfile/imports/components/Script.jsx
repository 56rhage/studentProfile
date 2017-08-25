import react, { Component } from 'react';

export default class Script extends Component{
  render(){
    <Script
      url="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
      />
  }

  handleScriptCreate() {
    this.setState({ scriptLoaded: false })
  }

  handleScriptError() {
    this.setState({ scriptError: true })
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true })
  }
}
