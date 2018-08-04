import React, {Component} from 'react'
import CardList from './cardList'
import {friends} from './friends'
import Searchbox from './searchbox'
import './App.css';
import Scroll from './scroll'

class App extends Component {
  	constructor () {
  		super()
  	this.state = {

  		friends: [],
  		searchfield: ''
  	}
  }


componentDidMount(){
	this.setState({friends:friends})
}


  onsearchChange =(event)=> {
    this.setState({searchfield: event.target.value})
    
    
  }

  	render () {
const friendfilter = this.state.friends.filter((friends) => {

      return friends.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      
    })
console.log(friendfilter);

  	 return (

    <div className='tc'>
<div class ='b'>
        <h1 id='a' className=' f1'>Friends Book</h1></div>
        <Searchbox searchChange={this.onsearchChange} />
        
        
       <div class='a'> <Scroll><CardList friends={friendfilter} />
        </Scroll>
        </div>
      </div>
  	)
  }
}
export default App
