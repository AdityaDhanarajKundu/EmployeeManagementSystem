package com.adityakundu.emsbackend.controller;

import com.adityakundu.emsbackend.dto.EmployeeDto;
import com.adityakundu.emsbackend.services.EmployeeServices;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")   // to handle the cors error enabling any client side api to send request
@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    // constructor dependency injection using lombok
    private EmployeeServices employeeServices;

    //POST mapping to create employee to the database REST API
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
        EmployeeDto savedEmployee = employeeServices.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    // GET REST API
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long empId){
        EmployeeDto employeeDto = employeeServices.getEmployeeById(empId);
        return ResponseEntity.ok(employeeDto);
    }

    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees(){
        List<EmployeeDto> employees = employeeServices.getAllEmployees();
        return ResponseEntity.ok(employees);
    }

    // UPDATE/ POST MAPPING REST API
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long empId, @RequestBody EmployeeDto updatedEmployee){
        EmployeeDto employeeDto = employeeServices.updateEmployee(empId,updatedEmployee);
        return ResponseEntity.ok(employeeDto);
    }

    // DELETE MAPPING REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long empId){
        employeeServices.deleteEmployee(empId);
        return ResponseEntity.ok("Employee with id "+empId+" is deleted successfully");
    }
}
