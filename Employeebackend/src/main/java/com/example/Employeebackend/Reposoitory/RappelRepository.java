package com.example.Employeebackend.Reposoitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Employeebackend.Model.Rappel;


@Repository
public interface RappelRepository extends JpaRepository<Rappel, Long>{

}


