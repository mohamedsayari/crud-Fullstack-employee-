package com.example.Employeebackend.Reposoitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Employeebackend.Model.Demande;

@Repository
public interface DemandeRepository extends JpaRepository<Demande,  Long> {

}
