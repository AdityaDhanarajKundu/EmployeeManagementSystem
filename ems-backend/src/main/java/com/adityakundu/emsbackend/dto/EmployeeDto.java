// file to define the data structure of the data to be communicated from and to client side and the backend api
// this will map employeeJpaentity with employee dto and dto to jpa entity

package com.adityakundu.emsbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeDto {
    private Long id;
    private String fname;
    private String lname;
    private String email;
}
