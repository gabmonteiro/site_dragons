package com.dragonsRegister.dragons;

import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DragonsApplication {

	public static void main(String[] args) {
		SpringApplication.run(DragonsApplication.class, args);
	}
}
