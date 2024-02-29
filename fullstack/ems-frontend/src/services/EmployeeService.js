// file for the client side api for the http rest api request handling
import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employees";

export function getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
}

export function createEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
}