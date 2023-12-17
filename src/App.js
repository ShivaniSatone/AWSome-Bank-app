import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import {React, useState } from "react";
// import 'homepage.css'

function Homepage(){
  const [formValue,setFormValue] = useState({name:'',email:'',mobile:'',password:''});
  const handleInput = (e)=>{
    const {name,value} =e.target;
    setFormValue({...formValue,[name]:value});
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const data ={name:formValue.name, email:formValue.email, mobile:formValue.mobile, password:formValue.password};
    let res = await fetch("http://localhost:8000/signup",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(data)
    });
  }
  return (<>
    <h2>Welcome to AWSome Bank</h2>
    <nav>
      <h3>AWSome Bank</h3>
      <a href="#">Home</a>
      <a href="#">Accounts</a>
      <a href="#">Transactions</a>
      <a href="#">Loans</a>
      <a href="#">Contact us</a>
    </nav>
    <section>{/* Section content goes here */}</section>
    <footer>© 2023 AWSome bank. All rights reserved.</footer>
  </>
  )
      
}

export default Homepage;