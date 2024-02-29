import { useEffect, useState } from 'react';
import { getEmployees } from '../services/EmployeeService';
import {useNavigate} from 'react-router-dom';

function ListEmployees() {
  const [employees, setEmployees] = useState([]); 
  const navigate = useNavigate(); 

  useEffect(()=>{
    getEmployees().then((response)=>{
        setEmployees(response.data);
    }).catch((error)=>{
        console.error(error);
    });
  },[employees]);
    
  // static data to create the table for the employees
//   const sampleData = [
//     {
//         "id": 1,
//         "firstName": "John",
//         "lastName": "Stone",
//         "email": "johnstone@gmail.com",
//     },
//     {
//         "id": 2,
//         "firstName": "Smiti",
//         "lastName": "Sharma",
//         "email": "smitisharma@gmail.com",
//     },
//     {
//         "id": 3,
//         "firstName": "Rahul",
//         "lastName": "Gupta",
//         "email": "rahulgupta@gmail.com",
//     },
//   ];
  function addNewEmployee(){
    navigate('/addEmployee');
  }
  
  return (
    <div className="container">
      <h1
        className="text-center"
        style={{ marginBottom: "20px", marginTop: "15px" }}
      >
        List of Employees
      </h1>
      <button className='btn btn-primary' style={{marginBottom: "15px"}} onClick={addNewEmployee}>Add Employee</button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.fname}</td>
              <td>{employee.lname}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListEmployees;