package com.adityakundu.emsbackend.services;

import com.adityakundu.emsbackend.dto.EmployeeDto;
import com.adityakundu.emsbackend.entity.Employee;
import com.adityakundu.emsbackend.exception.ResourceNotFoundException;
import com.adityakundu.emsbackend.mapper.EmployeeMapper;
import com.adityakundu.emsbackend.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeServices{
    private EmployeeRepo employeeRepo;
    // constructor dependency injection
    @Autowired
    public EmployeeServiceImpl(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }


    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Optional<Employee> employeeOptional = employeeRepo.findEmployeeByEmail(employee.getEmail());
        if(employeeOptional.isPresent()){
            throw new IllegalStateException("email is taken");
        }
        Employee savedEmployee = employeeRepo.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employeeOptional = employeeRepo.findById(employeeId).orElseThrow(() -> new ResourceNotFoundException("Employee not found with the id : " + employeeId));
        return EmployeeMapper.mapToEmployeeDto(employeeOptional);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepo.findAll();
        //convert the list of employee entity to listt of employeedto
        return employees.stream().map(EmployeeMapper::mapToEmployeeDto).collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long empId, EmployeeDto updatedEmployee) {
        Employee employee = employeeRepo.findById(empId).orElseThrow(()-> new ResourceNotFoundException("Employee not found with id "+empId));
        employee.setFname(updatedEmployee.getFname());
        employee.setLname(updatedEmployee.getLname());
        employee.setEmail(updatedEmployee.getEmail());

        Employee updEmployee = employeeRepo.save(employee);
        return EmployeeMapper.mapToEmployeeDto(updEmployee);
    }
}
