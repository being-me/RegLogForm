import React, {useState} from "react";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [flag, setFlag] = useState(false);
  const [Login, setLogin] = useState(true);


  function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Register Here</h1>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Full Name"
            onChange={(event)=>setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Email"
            onChange={(event)=>setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            onChange={(event)=>setPassword(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Phone No.</label>
          <input
            type="phone"
            className="form-control"
            placeholder="Enter Contact Number"
            onChange={(event)=>setPhone(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Register
        </button>
        <p>Already registered Login ?</p>
      </form>
    </div>
  );
}

export default Registration;
