import React, { useEffect, useState } from "react";

const Form = () => {
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);
  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  }
  useEffect(() => {
    // console.log("Registered");
  }, [flag]);
  function submitHandler(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("all fields are necessary");
    } else {
      // console.log('registered')
      setFlag(true);
      setInputData({name:"",email:"",password:""})
    }
    
  }
  return (
    <>
      <pre>
        {(flag) ? 
          <h1>hello, {inputData.name} you have registered successfully</h1>
        : 
          ""
        }
      </pre>
      <form className="container" onSubmit={submitHandler}>
        <div className="header">
          <h1>Registration Form</h1>
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            value={inputData.name}
            onChange={handleData}
          />
          <br />
          <input
            type="text"
            name="email"
            placeholder="enter your email"
            value={inputData.email}
            onChange={handleData}
          />
          <br />
          <input
            type="text"
            name="password"
            placeholder="enter your password"
            value={inputData.password}
            onChange={handleData}
          />
          <br />
          <button className="btn">Register</button>
        </div>
      </form>
    </>
  );
};

export default Form;
