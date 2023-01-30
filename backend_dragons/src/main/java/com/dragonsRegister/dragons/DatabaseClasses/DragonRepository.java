package com.dragonsRegister.dragons.DatabaseClasses;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DragonRepository extends MongoRepository<Dragon, String> {
}
