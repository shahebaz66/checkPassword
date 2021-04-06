import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Sign from './components/sign';
import Login from './components/login';
import _ from 'lodash';


function nextLetterInAlphabet(letter) {
  if (letter == "z") {
    return "a";
  } else if (letter == "Z") {
    return "A";
  } else {
    return String.fromCharCode(letter.charCodeAt(0) + 1);
  }
}
function ReverseString(str) {
  return str.split('').reverse().join('')
}
function sortString(str, value) {

  var a = _.sortBy(str.split(''));
  var b = _.sortBy(value.split(''));

  return a.join('') === b.join('');

}
function string(str, pass) {


  var a = pass.split("");
  var b = []
  for (var i of a) {
    if (typeof (i) === 'string') {
      b.push(nextLetterInAlphabet(i))
    } else {
      b.push(i + 1)
    }
  }


  return b.join("") === str;


}
function App() {
  var [show, setShow] = useState("");
  var [pass, setPass] = useState("");
  var [log, setLogin] = useState(true);

  const check = (value) => {

    if (pass == value) {
      setShow("correct password")
    } else if (pass == ReverseString(value)) {
      setShow("correct password")
    } else if (sortString(value, pass)) {
      setShow("correct password")
    } else if (string(value, pass)) {
      setShow("correct password")
    } else {
      setShow("incorrect password")
    }

  }
  const set = (data) => {
    setPass(data);
    setLogin(!log)
  }
  const login = () => {
    setLogin(!log)
    setShow("")


  }
  return (
    <div className="App">
      {show !== "" ? <div style={{ color: "white" }}>{show}</div> : null}
      {log ? <Login check={check} /> : <Sign set={set} />}
      <h6 style={{ color: "white", cursor: "pointer" }} onClick={login}>{log ? "signup" : "login"}</h6>
    </div>
  );
}

export default App;
