package com.example.employee;

import com.example.employee.model.Employee;
import com.example.employee.service.EmployeeService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class EmployeeDemoApplication {

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(EmployeeDemoApplication.class, args);

        EmployeeService service = context.getBean(EmployeeService.class);

        Employee emp = new Employee();
        emp.setName("John Doe");
        emp.setDepartment("IT");

        service.addEmployee(emp);

        System.out.println("Employee Saved Successfully");
    }
}
