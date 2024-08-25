package com.ubs.hackathon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ErgoGateWayApplication {

	public static void main(String[] args) {
		SpringApplication.run(ErgoGateWayApplication.class, args);
	}
}
