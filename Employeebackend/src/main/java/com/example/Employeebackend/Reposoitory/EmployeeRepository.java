package com.example.Employeebackend.Reposoitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Employeebackend.Model.Employee;



@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
