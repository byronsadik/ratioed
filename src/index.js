import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


fetch("https://twitterbukativ1.p.rapidapi.com/search", {
    "method": "POST",
    "headers": {
        "x-rapidapi-host": "TwitterBukatiV1.p.rapidapi.com",
        "x-rapidapi-key": "4667ebdb75mshb897f762a157513p1f5b5djsn96c4d9bc87ed",
        "content-type": "application/x-www-form-urlencoded"
    },
    "body": {
        "consumerKey": "iKl6TjR15jVIaBNjRwFq5MHhH",
        "query": "cheese",
        "accessTokenKey": "1198396973499461632-5GkDiWJaKh8aWsfX7nn5potUWljspH",
        "consumerSecret": "GyJcWqINto93ooCnrwWNmdiLPpFJVIEAfl6zsC13rzeg7nfJxc",
        "accessTokenSecret": "X0GP39wh9fuyeP4mcOpnhR5GWCeyxw0s0Rh0ZS63JXMmc"
    }
})
.then(response => {
    console.log(response);
})
.catch(err => {
    console.log(err);
});