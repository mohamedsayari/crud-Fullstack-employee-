package com.example.Employeebackend.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Employeebackend.Exception.ResourceNotFoundException;

import com.example.Employeebackend.Model.Rappel;

import com.example.Employeebackend.Reposoitory.RappelRepository;

@CrossOrigin ("*")
@RestController
@RequestMapping("/api/v1")
public class RappelController {
	 @Autowired
	    private RappelRepository rappelRepository;

	    @GetMapping("/rappels")
	    public List<Rappel> getAllRappels() {
	        return rappelRepository.findAll();
	    }

	    @GetMapping("/rappels/{id}")
	    public ResponseEntity<Rappel> getRappelById(@PathVariable(value = "id") Long rappelId)
	        throws ResourceNotFoundException {
	    	Rappel rappel = rappelRepository.findById(rappelId)
	          .orElseThrow(() -> new ResourceNotFoundException("Rappel not found for this id :: " + rappelId));
	        return ResponseEntity.ok().body(rappel);
	    }
	    
	    @PostMapping("/rappels")
	    public Rappel createRappel(@Valid @RequestBody Rappel rappel) {
	        return rappelRepository.save(rappel);
	    }

	    @PutMapping("/rappels/{id}")
	    public ResponseEntity<Rappel> updateRappel(@PathVariable(value = "id") Long rappelId,
	         @Valid @RequestBody Rappel rappelDetails) throws ResourceNotFoundException {
	    	Rappel rappel = rappelRepository.findById(rappelId)
	        .orElseThrow(() -> new ResourceNotFoundException("Rappel not found for this id :: " + rappelId));

	        rappel.setTitre(rappelDetails.getTitre());
	        rappel.setDescription(rappelDetails.getDescription());
	        rappel.setDate(rappelDetails.getDate());
	        final Rappel updatedRappel = rappelRepository.save(rappel);
	        return ResponseEntity.ok(updatedRappel);
	    }

	    @DeleteMapping("/rappels/{id}")
	    public Map<String, Boolean> deleteRappel(@PathVariable(value = "id") Long rappelId)
	         throws ResourceNotFoundException {
	    	Rappel rappel= rappelRepository.findById(rappelId)
	       .orElseThrow(() -> new ResourceNotFoundException("Rappel not found for this id :: " + rappelId));

	        rappelRepository.delete(rappel);
	        Map<String, Boolean> response = new HashMap<>();
	        response.put("deleted", Boolean.TRUE);
	        return response;
	    }
	}




