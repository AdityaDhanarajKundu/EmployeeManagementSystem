import { useState } from "react";
import { createEmployee } from "../services/EmployeeService";
import {useNavigate, useParams} from "react-router-dom";

function Employee() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setEmail] = useState("");
  const {id} = useParams();

  // state variable to hold the form validation errors
  const [errors, setErrors] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  
  const navigate = useNavigate();

  function saveEmployee(e){
    e.preventDefault();
    const employee = {fname, lname, email};
    console.log(employee);

    if(validateForm()){
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
  }

  function validateForm(){
    let valid = true;
    const errorsCopy = {...errors};

    if(fname.trim()){
      errorsCopy.fname = "";
    }else{
      errorsCopy.fname = "First Name is required";
      valid = false;
    }

    if(lname.trim()){
      errorsCopy.lname = "";
    }else{
      errorsCopy.lname = "Last Name is required";
      valid = false;
    }

    if(email.trim()){
      errorsCopy.email = "";
    }else{
      errorsCopy.email = "Email is required";
      valid = false;
    }  

    setErrors(errorsCopy);

    return valid;
  }

  function pageTitle(){
    if(id){
      return <h2 className="text-center">Update Employee</h2>;
    }else{
      return <h2 className="text-center">Add Employee</h2>;
    }
  }

  return (
    <div className="container">
      <br />
      <div className="row mt-3">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {pageTitle()}
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
                  className={`form-control ${errors.fname ? "is-invalid" : ""}`}
                  onChange={(event) => setfname(event.target.value)}
                />
                {errors.fname && (
                  <div className="invalid-feedback">{errors.fname}</div>
                )}
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
                  className={`form-control ${errors.lname ? "is-invalid" : ""}`}
                  onChange={(event) => setlname(event.target.value)}
                />
                {errors.lname && (
                  <div className="invalid-feedback">{errors.lname}</div>
                )}
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
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  onChange={(event) => setEmail(event.target.value)}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <button className="btn btn-success" onClick={saveEmployee}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
