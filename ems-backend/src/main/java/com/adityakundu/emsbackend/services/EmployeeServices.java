package com.adityakundu.emsbackend.services;

import com.adityakundu.emsbackend.dto.EmployeeDto;
import com.adityakundu.emsbackend.entity.Employee;

import java.util.List;

public interface EmployeeServices {
    EmployeeDto createEmployee(EmployeeDto employeeDto);
    EmployeeDto getEmployeeById(Long employeeId);
    List<EmployeeDto> getAllEmployees();
}
