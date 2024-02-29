import { useState } from "react";

function Employee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  function saveEmployee(e){
    e.preventDefault();
    const employee = {firstName, lastName, email};
    console.log(employee);
  }

  return (
    <div className="container">
      <br />  
      <div className="row mt-3">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Add Employee</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label" htmlFor="fname">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Employee First Name"
                  name="fname"
                  id="fname"
                  value={firstName}
                  className="form-control"
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label" htmlFor="lname">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Employee Last Name"
                  name="lname"
                  id="lname"
                  value={lastName}
                  className="form-control"
                  onChange={(event) => setLastName(event.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Employee Email"
                  name="email"
                  id="email"
                  value={email}
                  className="form-control"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <button className="btn btn-success" onClick={saveEmployee}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
