package com.adityakundu.emsbackend.services;

import com.adityakundu.emsbackend.dto.EmployeeDto;
import com.adityakundu.emsbackend.entity.Employee;
import com.adityakundu.emsbackend.exception.ResourceNotFoundException;
import com.adityakundu.emsbackend.mapper.EmployeeMapper;
import com.adityakundu.emsbackend.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

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
}
