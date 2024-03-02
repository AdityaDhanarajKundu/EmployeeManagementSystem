// file for the client side api for the http rest api request handling
import axios from 'axios';

const EMPLOYEE_API_BASE_URL =
  "https://springboot-mysql-ems-env.eba-cqssvdhy.ap-southeast-2.elasticbeanstalk.com/api/employees";

export function getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
}

export function createEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
}

export function getEmployeeById(employeeId) {
    return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
}

export function updateEmployee(employeeId, employee) {
    return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
}

export function deleteEmployee(employeeId) {
    return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
}