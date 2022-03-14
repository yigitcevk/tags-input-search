import React from 'react';
import './App.scss';
import Page from './components/Page';


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
    <div>
      <Page 
      data={data}
      />
    </div>
  );
}

export default App;