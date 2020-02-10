import React, {Component} from 'react'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {

      filterString: "",

      foods: ['cheese', 'crackers', 'pringles', 'oranges', 'potatoes', 'bacon', 'avocado']

    }
  }


  handleChange(filter) {
    this.setState({filterString: filter})
  }



  render(){

    // let foodsDisplayed = this.state.foods.map((element,index) => {
    //   return <h2 key = {index} >{element}</h2>
    // })

    let foodsDisplayed = this.state.foods.filter((element,index) => {
      return element.includes(this.state.filterString);
    })

    .map ((element,index) => {
    return <h2 key={index}>{element}</h2>
    })





    return(
      <div>
        <input  onChange = {e => this.handleChange(e.target.value) }  />
        {foodsDisplayed}
      </div>
    )

  }


}
export default App