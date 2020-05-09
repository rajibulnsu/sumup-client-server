import React, { Component } from 'react';
import './App.css';

import fetchData from './utils/fetchData';
import Transaction from './components/transaction/';
import sortTransactionsByDate from './utils/sortTransactionsByDate';

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    this.fetchAndUpdate();
    window.addEventListener('scroll', this.scrollHandler.bind(this));
  }

  async fetchAndUpdate () {
    const data = await fetchData();
    const fetchedData = data ? data : [];
    const sortedData = sortTransactionsByDate(fetchedData);

    const mergedData = [...this.state.data, ...sortedData];
    this.setState({ ...this.state, data: mergedData });
  }

  scrollHandler() {
    const distanceToBottom = document.body.getBoundingClientRect().bottom;
    
    if (distanceToBottom < 1000) {
      this.fetchAndUpdate();
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <h3>Welcome to the SumUp task!</h3>
        <p>Sales History</p>
        { data.map( item => <Transaction detail={item} key={item.transactionId}/> ) }
      </div>
    );
  };
}

export default App;
