import React, {Component} from 'react'

class App extends Component{

  constructor(props){
    super(props)

    this.state = {
      devMountainProjects: ['pass', 'pass', 'incomplete', 'pass', 'fail']
    }
  }

  render(){

    let devScoresToDispay = this.state.devMountainProjects.map((element,index) => {
      return <h2>{element}</h2>
    })

    return (
      <div>
        {/*this.state.devMountainProjects*/ devScoresToDispay}
      </div>
    )
  }

}

export default App






// import React, {Component} from 'react'

// class App extends Component {

//   constructor(props){
//     super(props)


//     this.state = {
//       takeInInput: ""

//     }
//   }

//   handleChange(typedValues){
//     this.setState({takeInInput: typedValues})
//   }

//   render(){

    

//     return(
//       <div>
//         <input onChange = {e => this.handleChange(e.target.value) } />
//         <h1>{this.state.takeInInput}</h1>
//       </div>
//     )
//   }


// }

// export default App









// import React, {Component} from 'react';

// class App extends Component {
//   constructor(props){
//     super(props);


//     this.state = {
//       stuff: ["true", "false", "true", "true"]
//     };
//   }

//   render(){

//     let newStuff = this.state.stuff.map((element,index) => {
//       return <h2>{element}</h2>
//     })
    
    
//     return (
//     <div> 
//       {newStuff}
//     </div>
//     )
//   }

// }

// export default App


// import React, {Component} from 'react'

// class App extends Component {
//   constructor(props){
//     super(props)

//     this.state = {
//       typedInfo: ""
//     }
//   }

//   handleChange(newValues){
//     this.setState({typedInfo: newValues})
//   }

//   render(){

//       return (
//         <div>
//           <input  onChange = {(e) => this.handleChange(e.target.value)}  />
//           <p>{this.state.typedInfo}</p>
//         </div>
//       )

//   }

// }

// export default App;

// import React, {Component} from 'react'

// class App extends Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       textInput: ""
//     };
//   }

//   handleChange(newInput){
//       this.setState({textInput: newInput});
//   }
    
    
//     render() {
//       return (
//         <div>
//         <input onChange ={ e => this.handleChange(e.target.value)}/>
//         <p>{this.state.textInput}</p>
//       </div>
//     );
//   }  
// }

// export default  App;




// import React, {Component} from 'react';

// class App extends Component{
//   constructor(props){
//     super(props)

//     this.state = {
//       numbers: [1,2,3,4,5,6,5,4,3,2,1]
//     };
//   }


//   render(){
    
//     let numbersToDisplay = this.state.numbers.map((element,index) => {
//       return <h2 key={index}>{element}</h2>;
//     });
    
    
//     return(
//       <div>
//         {numbersToDisplay}  
//       </div>
//     )
//   }
// }

// export default App;




// import React, {Component} from 'react'

// class App extends Component {
//   constructor(props){
//     super()

//     this.state = {
//       names: ["John","Jacob", 'Jingle', 'Hiemer', 'Smitt']
//     }
//     //console.log(this.state.names)
//   }

//   render(){

//     let namesToDisplay = this.state.names.map((element, index) => {
//         return <h2 key = {index}>{element}</h2>;
//       });

    

      
    
    
    
//     return(
//       <div>
//           {namesToDisplay}
//       </div>
//     )
//   }
// }

// export default App




// import React, {Component} from 'react'

// class App extends Component {
//   constructor(props){
//     super(props)

//     this.state = {
//       arr: ['Chicago', 'Seattle', 'San Francisco', 'Baltimore', 'Boise', 'Houston']
//     }
//   }

//   render(){
    
//     let arrToDisplay = this.state.arr.map((element, index) => {
//       return <h2 key = {index}>{element}</h2>
//     });

//     return (
//       <div>
//         {arrToDisplay}
//       </div>

//     );
//   }

// }

// export default App;











// import React, {Component} from 'react';


// class App extends Component {
//   constructor(props){
//     super(props)

//     this.state = {

//       soda: ['cola', 'sprite','Mellow Yellow', 'Iron Port', 'Apple Beer']
//     }

//   }

//   // handleChange(value){
//   //   this.setState({data: value})
//   // }


//   render() {

//     let sodaToDisplay = this.state.soda.map((element,index) => {
//       return <h2>{element}</h2>; // ask about this line <--------------------------------------------------
//     })


//     return (
//       <div>

//       {sodaToDisplay}

//       </div>
//     )

//   }


// }

// export default App