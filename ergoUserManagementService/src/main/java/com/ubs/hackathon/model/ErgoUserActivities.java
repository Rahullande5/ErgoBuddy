package com.ubs.hackathon.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "ergo_user_activities")
public class ErgoUserActivities {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long gpnActivityID;

	@Column(name = "ERGO_ACTIVITY_TYPE", nullable = false)
	private String userActivityType;

	@Column(name = "ERGO_ACTIVITY_DESC", nullable = false)
	private String userActivityDescription;

	@Column(name = "ERGO_ACTIVITY_FREQUENCY", nullable = false)
	private String userActivityFrequency;

	@Column(name = "ERGO_USER_LOGIN_TIME", nullable = false)
	private String userUserLoginTime;

	@Column(name = "ERGO_USER_LOGOUT_TIME", nullable = false)
	private String userUserLogOutTime;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "gpn_user_id")
	private UserDetails userDetails;
}
