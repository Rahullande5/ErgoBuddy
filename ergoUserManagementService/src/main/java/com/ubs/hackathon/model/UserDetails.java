package com.ubs.hackathon.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "ergo_users")
public class UserDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long gpnID;

	@Column(name = "ERGO_USER_NAME",nullable = false, unique = true)
	private String ergoUserName;

	@Column(name = "ERGO_USER_PASS",nullable = false)
	private String ergoUserPassword;

	@Column(name = "ERGO_USER_EMAIL",nullable = false)
	private String ergoUserEmail;

	@Column(name ="ERGO_USER_ROLE",nullable = true)
	private String ergoUserDesignation;

	@Column(name = "IS_CUSTOMIZATION_ENABLED", nullable = false)
	private Boolean isCustomized;
	
	@Column(name = "ERGO_USER_LOCATION", nullable = false)
	private Boolean ergoUserLocation;
}
