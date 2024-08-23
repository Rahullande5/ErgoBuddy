package com.ubs.hackathon.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Entity
@Table(name = "ergo_users")
@Data
@NoArgsConstructor
@Accessors(fluent = true)
public class UserDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long gpnID;

	@Column(nullable = false, unique = true)
	private String userName;

	@Column(nullable = false)
	private String userPassword;

	@Column(nullable = false)
	private String userEmail;

	@Column(nullable = true)
	private String userDesignation;
}
