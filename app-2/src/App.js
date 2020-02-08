import React, {Component} from 'react';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {

      soda: ['cola', 'sprite','Mellow Yellow', 'Iron Port', 'Apple Beer']
    }

  }

  // handleChange(value){
  //   this.setState({data: value})
  // }


  render() {

    let sodaToDisplay = this.state.soda.map((element,index) => {
      return <h2 key={index}>{element}</h2>
    })


    return (
      <div>

      {sodaToDisplay}

      </div>
    )

  }


}

export default App