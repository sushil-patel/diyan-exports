package com.diyan.exports;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef = "securityAuditorAware")
public class DiyanExportApplication {

	public static void main(String[] args) {
		SpringApplication.run(DiyanExportApplication.class, args);
	}

}
