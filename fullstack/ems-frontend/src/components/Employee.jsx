import { useState } from "react";
import { createEmployee } from "../services/EmployeeService";
import {useNavigate} from "react-router-dom";

function Employee() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function saveEmployee(e){
    e.preventDefault();
    const employee = {fname, lname, email};
    console.log(employee);
    createEmployee(employee)
      .then((response) => {
        console.log(response);
        alert("Employee added successfully");
        navigate("/employees");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to add employee");
      });  
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
                  value={fname}
                  className="form-control"
                  onChange={(event) => setfname(event.target.value)}
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
                  value={lname}
                  className="form-control"
                  onChange={(event) => setlname(event.target.value)}
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
