console.log('App.js is running!');

// JSX - JavaScript XML
var template = <div><h1>Indecision Appp</h1><p>This is some info</p></div>;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);