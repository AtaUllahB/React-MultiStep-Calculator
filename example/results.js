
import React, { Component } from 'react';
import styled from "@emotion/styled";
import axios from "axios";
class RetrieveList extends Component {
  state = {
      persons: [],
  };
/* 
 This is where the magic happens 
*/
componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users") // where the api gets fetched from that API
      .then(res=>{
        console.log(res);
        this.setState({ persons: res.data});
      })
  }
  render() {
    return (

      <form id="msform" onSubmit = { this.handleSubmit }>
    <ul id="progressbar">
        <li className="active">Price</li>
        <li>Details</li>
        <li>Advanced Details</li>
    </ul>
    <fieldset>
    <img className="imm" src={logo}></img>
        <h3 className="fs-subtitle">Home | Price</h3>
        <input type="range" min="80000" max="999999" className="slider" id="myRange" onChange={e=>{this.setState({price : e.target.value});}} />
        <p>$<span id="demo"></span></p>                                                       
        <input type="button" name="next" className="next action-button" value="Next" />
    </fieldset>
    <fieldset>
    <img className="imm" src={logo}></img>
        <h3 className="fs-subtitle">Details</h3>
        <div className="input-group-prepend">
            <span className="input-group-text">$</span>
        </div>
        <input type="number" className="form-control" name="Down_payment" placeholder="Down payment" onChange={e=>{this.setState({down_payment : e.target.value});}}/>
        <select onChange={e=>{this.setState({loan_length : e.target.value});}}>
            <option selected="true" disabled="disabled">Length of loan</option>
            <option value="30">30 Years</option>
            <option value="20">20 Years</option>
            <option value="15">15 Years</option>
            <option value="10">10 Years</option>
        </select>

        <div className="input-group mb-3">
            <div className="input-group-prependd">
                <span className="input-group-text">%</span>
            </div>
            <input type="number" className="form-control"  min="0" max="100"name="Interest_rate" placeholder="Interest rate" onChange={e=>{this.setState({interest_rate : e.target.value});}} />
        </div>
        <input type="button" name="previous" className="previous action-button" value="Previous" />
        <input type="button" name="next" className="next action-button" value="Next" />
    </fieldset>
    <fieldset>
    <img className="imm" src={logo}></img>
        <h3 className="fs-subtitle">Advanced Details</h3>
        <select onChange={e=>{this.setState({credit_score : e.target.value});}}>
            <option selected="true" disabled="disabled">Credit Score</option>
            <option value="30">740+</option>
            <option value="20">720-739</option>
            <option value="15">700-719</option>
            <option value="10">680-699</option>
            <option value="10">660-679</option>
        </select>
        <div className="input-group-prependdd">
            <span className="input-group-text">$</span>
        </div>
        <input type="number" className="form-control" name="Tax" placeholder="Property Tax" onChange={e=>{this.setState({tax : e.target.value});}} />

        <div className="input-group-prependddd">
            <span className="input-group-text">$</span>
        </div>
        <input type="number" className="form-control" name="Insurance" placeholder="Home Owner's Insurance" onChange={e=>{this.setState({insurance : e.target.value});}}/>

        <div className="input-group-prependdddd">
            <span className="input-group-text">$</span>
        </div>
        <input type="number" className="form-control" name="HOA_fee" placeholder="HOA Fee" onChange={e=>{this.setState({hoa_fee : e.target.value});}}/>
       <input type="button" name="next" className="next action-button" value="Next" />
        <input type="button" name="previous" className="previous action-button" value="Previous" />
        <input type="submit" name="submit" className="submit action-button" value="Submit" />
    </fieldset>
        <fieldset>



 <Chart
          chartType="AreaChart"
          width="100%"
          height="400px"
           rows={[[2015, 5], [2016, 3], [2018, 1]]}
          columns={[
  {
    type: "number",
    label: "year"
  },
  {
    label: "AttentionSpan",
    type: "number"
  }
    ]}
        />

    <DonutChart
    width={300}
    height={200}
        data={[{
            label: 'HOA FEE',
            value: 50
        },
    {
        label: 'Homeowner insurance',
        value: 25
    },

     {
        label: 'Property tax',
        value: 25
    }
    
    
    ]} />






    </fieldset>

    </form>



      <Container>
        <Header/>
        {this.state.persons.map(person=><li key = {person.id}>{person.name}</li>)}
      </Container>
    );
  }
}
export default RetrieveList;
