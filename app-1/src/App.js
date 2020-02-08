import React, {Component} from 'react'

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      message: ""      
    }

  }

  handleChange(liveInput){
    this.setState({message: liveInput})
  }

  render(){
    return (
      <div>
        <input onChange={e => this.handleChange(e.target.value)} />
        <p>{this.state.message}</p>

      </div>
    )
  }

}

export default App;






// import React, {Component} from 'react'

// class App extends Component{
//   constructor(props){
//     super(props)

//     this.state = {
//       message: ""

//     }
//   }

//   handleChange(valueInput){
//     this.setState({message: valueInput})
//   }

//   render(){
//     return(
//       <div>
//         <input onChange = {e=> this.handleChange(e.target.value)} />
//         <p>{this.state.message}</p>
//       </div>
//     )
//   }

// }

// export default App





// import React, {Component} from 'react'

// class App extends Component {
//   constructor (props) {
//   super (props)

//   this.state = {
//     message: ""
//   };
  
//   }

//   handleChange(value){
//     console.log(value)
//     this.setState({message: value});
//   }

//   render() {
//     console.log(this.state)
//     return (
//       <div className = "App">
//         <input onChange = {(e) => this.handleChange(e.target.value) } type = "text" />
//         <p>{this.state.message}</p>
//       </div>
//     );
//   }

// }

// export default App;






















































// import React, { Component } from 'react';
// import './App.css';

// class App extends Component{
//   constructor(){
//     super()

//     this.state = {
//       message: ""
//     };
//   };


//   handleChange(value){
//     this.setState({message: value})
//   }


//   render(){
//     return (
//       <div>
//         <input onChange={ (e) => this.handleChange(e.target.value) }></input>

//       </div>
//     )
//   }


// }

// export default App;
