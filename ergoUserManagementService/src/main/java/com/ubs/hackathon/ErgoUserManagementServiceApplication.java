package com.ubs.hackathon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ErgoUserManagementServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ErgoUserManagementServiceApplication.class, args);
	}

}
