import React, {Component} from 'react'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {

      foods: ['cheese', 'crackers', 'pringles', 'oranges', 'potatoes', 'bacon', 'avocado']

    }
  }



  render(){

    let foodsDisplayed = this.state.foods.map((element,index) => {
      return <h2 key = {index} >{element}</h2>
    })


    return(
      <div>
        <input  />
        {foodsDisplayed}
      </div>
    )

  }


}
export default App