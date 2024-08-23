package com.ubs.hackathon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class ErgoEurekaServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ErgoEurekaServiceApplication.class, args);
	}

}
