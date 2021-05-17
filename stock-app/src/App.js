import React, { Component } from "react";
import './App.css';
import CompanyInput from './CompanyInput/CompanyInput';
import DateButtonGroup from './DateButtonGroup/DateButtonGroup';
import { fetchData } from "./util";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: 0,
      date: 0,
      stockData: 0
    }
  }

  async fetchDataCall() {
    return await fetchData();
  }
  render () {
    const { company = 0, date = 0, stockData = 0 } = this.state;
    console.log(stockData);
    const res = this.fetchDataCall(); 
    console.log(res);
    const clickHandler = () => {
      console.log('hola');
    };
    return (
      <div className="App">
        <CompanyInput value={company} />
        <DateButtonGroup date={date} onClick={clickHandler} />
      </div>
    );
  }
};
