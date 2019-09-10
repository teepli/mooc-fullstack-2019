import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = ({ good, neutral, bad }) => {
  return (
    <table>
      <Statistic text="Good" stats={good} />
      <Statistic text="Neutral" stats={neutral} />
      <Statistic text="Bad" stats={bad} />
      <Statistic text="All" stats={good + bad + neutral} />
      <Statistic text="Average" stats={(good - bad) / (good + bad + neutral)} />
      <Statistic
        text="Positive"
        stats={(good / (good + bad + neutral)) * 100}
      />
    </table>
  );
};

const Statistic = props => {
  return (
    <tr>
      <th>{props.text}</th>
      <th>
        {props.stats} {props.text === "Positive" ? "%" : null}
      </th>
    </tr>
  );
};

const Button = props => <button onClick={props.handler}>{props.text}</button>;

const BestQuote = () => {
  let index = votes.indexOf(Math.max(...votes));
  return (
    <div>
      <p>{anecdotes[index]}</p>
      <p>has {votes[index]} votes</p>
    </div>
  );
};
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [selected, setSelected] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleBad = () => setBad(bad + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleQuote = () => setSelected(Math.floor(Math.random() * 5));
  const handleVote = () => {
    votes[selected] += 1;
    handleQuote();
  };
  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <Button handler={handleGood} text="Good" />
        <Button handler={handleNeutral} text="Neutral" />
        <Button handler={handleBad} text="Bad" />
      </div>
      <hr></hr>
      {good !== 0 || neutral !== 0 || bad !== 0 ? (
        <Statistics good={good} bad={bad} neutral={neutral} />
      ) : (
        <p>No feedback given</p>
      )}
      <hr></hr>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handler={handleQuote} text="Next anecdote" />
          <Button handler={handleVote} text="Vote" />
          <h2>Anecdote with most votes</h2>
      <BestQuote />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

const votes = [0, 0, 0, 0, 0];
ReactDOM.render(<App />, document.getElementById("root"));
