import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  state = {fullName : "Omar hasni" , bio : "" , imgSrc : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bikewale.com%2Fyamaha-bikes%2Fmt-15%2Fimages%2F&psig=AOvVaw0N180Tv7ygB5-EerdKneXa&ust=1619712060983000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPC18-GnofACFQAAAAAdAAAAABAD" , profession : "" , shows :false}
  handleClick= ()=>{this.setstate({shows : true });
                    <img src ={this.state ({imgSrc})}/>}
  render() {
    return (
      <>
     <button onClick={this.handleClick}> ClickMe</button>
      </>
    )
  } 
}

/*
Create a project using create-react-app.
Transform the App.js into a class-based component.
Implement a state for this class containing a Person ={ fullName,bio, imgSrc, profession} and a boolean shows.
Add a button that toggles the show state. When the show state is true, the person's profile will appear.
Create a field that shows the time interval since the last component was mounted using the component lifecycle.
Hint: use the setInterval method.
*/
