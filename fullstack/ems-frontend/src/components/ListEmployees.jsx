import React from 'react';

function ListEmployees() {
  const sampleData = [
    {
        "id": 1,
        "firstName": "John",
        "lastName": "Stone",
        "email": "johnstone@gmail.com",
    },
    {
        "id": 2,
        "firstName": "Smiti",
        "lastName": "Sharma",
        "email": "smitisharma@gmail.com",
    },
    {
        "id": 3,
        "firstName": "Rahul",
        "lastName": "Gupta",
        "email": "rahulgupta@gmail.com",
    },
  ];
    
  return (
    <div className='container'>
      <h1 className='text-center' style={{marginBottom: "20px", marginTop: "15px"}}>List of Employees</h1>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
          </tr>
        </thead>
        <tbody>
            {sampleData.map((employee)=>(
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListEmployees;