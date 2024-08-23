package com.ubs.hackathon.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ubs.hackathon.model.UserDetails;
import com.ubs.hackathon.service.ErgoUserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/ergoBuddy/users")
public class ErgoUserController {

	@Autowired
	private ErgoUserService ergoUserService;

	@PostMapping
	public UserDetails createUser(@RequestBody @Valid final UserDetails userDetails) {
		return ergoUserService.createErgoUser(userDetails);
	}

	@GetMapping
	public List<UserDetails> getAllErgoUsers() {
		return ergoUserService.getAllErgoUsers();
	}

	@GetMapping("/{gpnID}")
	public ResponseEntity<UserDetails> getErgoUserById(@PathVariable Long gpnID) {
		UserDetails userDetails = ergoUserService.getErgoUserById(gpnID);
		if (userDetails != null) {
			return ResponseEntity.ok(userDetails);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@PutMapping("/{gpnID}")
	public ResponseEntity<UserDetails> updateUser(@PathVariable Long gpnID, @RequestBody UserDetails userDetails) {
		UserDetails updatedUser = ergoUserService.updateErgoUser(gpnID, userDetails);
		if (updatedUser != null) {
			return ResponseEntity.ok(updatedUser);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@DeleteMapping("/{gpnID}")
	public ResponseEntity<Void> deleteUser(@PathVariable Long gpnID) {
		ergoUserService.deleteErgoUserById(gpnID);
		return ResponseEntity.noContent().build();
	}
}
