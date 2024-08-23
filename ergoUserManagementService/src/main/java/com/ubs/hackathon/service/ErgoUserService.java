package com.ubs.hackathon.service;

import java.util.List;

import com.ubs.hackathon.model.UserDetails;

public interface ErgoUserService {

	List<UserDetails> getAllErgoUsers();

	UserDetails getErgoUserById(Long gpnID);

	UserDetails createErgoUser(UserDetails user);
	
	UserDetails updateErgoUser(Long gpnID,UserDetails user);
	
	void deleteErgoUserById(Long gpnID);
}
