import React from 'react';
import './App.scss';
import Page from './components/Page';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const App = () => {
  
  const data = [
    {question: "Support problem", url: 'https://github.com/' ,repliesNum: 2},
    {question: "Login problem", url: 'https://github.com/' ,repliesNum: 0},
    {question: "Verification problem", url: 'https://github.com/' ,repliesNum: 1},
    {question: "Help me", url: 'https://github.com/' ,repliesNum: 3},
    {question: "Support login problem", url: 'https://github.com/' ,repliesNum: 0},
    {question: "Help lost all conditions", url: 'https://github.com/' ,repliesNum: 6},
    {question: "Support login verification", url: 'https://github.com/' ,repliesNum: 2},
    {question: "Cancel payment", url: 'https://github.com/' ,repliesNum: 1}
  ];

  return (
    <Router>
      <div>
        <Page 
        data={data} 
        />
      </div>
    </Router>
  );
}

export default App;