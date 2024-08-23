package com.ubs.hackathon.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ubs.hackathon.model.UserDetails;
import com.ubs.hackathon.repository.ErgoUserRepository;

@Service
public class ErgoUserServiceImpl implements ErgoUserService {

	@Autowired
	private ErgoUserRepository ergoUserRepository;

	@Override
	public List<UserDetails> getAllErgoUsers() {
		return ergoUserRepository.findAll();
	}

	@Override
	public UserDetails getErgoUserById(final Long gpnID) {
		return ergoUserRepository.findById(gpnID).orElse(null);
	}

	@Override
	public UserDetails createErgoUser(final UserDetails userDetails) {
		return ergoUserRepository.save(userDetails);
	}

	@Override
	public UserDetails updateErgoUser(final Long gpnID, final UserDetails userDetails) {
		UserDetails userDetalle = ergoUserRepository.findById(gpnID).orElse(null);
		if (userDetalle != null) {
			return ergoUserRepository.save(userDetalle);
		}
		return null;
	}

	@Override
	public void deleteErgoUserById(final Long gpnID) {
		ergoUserRepository.deleteById(gpnID);
	}
}
