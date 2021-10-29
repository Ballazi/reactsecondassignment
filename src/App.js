import './App.css';
import {Component} from 'react';
import {Feedback} from './components/fedbac';


class App extends Component
{
  state = 
  {
    feedback : [],
    name: "",
    depart : "",
    rating : 0,
  }

  namechange = (e) =>
  {
    let val = e.target.value;
    this.setState({name:val});
  }
  departmentchange = (e) =>
  {
    let val = e.target.value;
    this.setState({depart:val});
  }
  ratingchange = (e) =>
  {
    let val = e.target.value;
    this.setState({rating:val});
  }
  insertdata = (e)=>
  {
    e.preventDefault();
    let val = {id:this.state.feedback.length+1,name:this.state.name,department:this.state.depart,rating:this.state.rating};
    let arr = [...this.state.feedback];
    arr.push(val);
    this.setState({feedback:arr,name: "",depart : "",rating : 0,});
  }

  
  render(){
    
    return (
      <div className="App">
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <form>
          <div className="div">
            <label htmlFor="Name">Name : </label>
            <input type="text" className="input" name="Name" value={this.state.name} onChange={this.namechange} />
          </div>
          <div className="div">
            <label htmlFor="D">Department : </label>
            <input type="text" className="input" name="Department" value={this.state.depart} onChange={this.departmentchange} />
          </div>
          <div className="div">
            <label htmlFor="rating">Rating : </label>
            <input type="text" className="input" name="rating" value={this.state.rating} onChange={this.ratingchange} />
          </div>
          <div className="div2"><button type="submit" className="submit" onClick={this.insertdata}>Submit</button></div>
        </form>
        <Feedback entery={this.state.feedback} />
      </div>
    );
  }
}

export default App;
