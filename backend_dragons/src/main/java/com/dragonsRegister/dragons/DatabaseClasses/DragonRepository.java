package com.dragonsRegister.dragons.DatabaseClasses;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface DragonRepository extends MongoRepository<Dragon, String> {
}
