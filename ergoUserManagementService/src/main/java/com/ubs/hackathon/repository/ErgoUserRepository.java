package com.ubs.hackathon.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ubs.hackathon.model.UserDetails;

@Repository
public interface ErgoUserRepository extends JpaRepository<UserDetails, Long> {

	UserDetails findByErgoUserName(String userName);
}
