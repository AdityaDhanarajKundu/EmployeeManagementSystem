package com.adityakundu.emsbackend.services;

import com.adityakundu.emsbackend.dto.EmployeeDto;
import com.adityakundu.emsbackend.entity.Employee;
import com.adityakundu.emsbackend.mapper.EmployeeMapper;
import com.adityakundu.emsbackend.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        Employee savedEmployee = employeeRepo.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }
}
