package com.dragonsRegister.dragons.DatabaseClasses;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DragonService {

    @Autowired
    private DragonRepository dragonRepository;

    public void salvar(String nome, String tipo) {
        Dragon dragon = new Dragon(nome, tipo);
        this.dragonRepository.save(dragon);
    }
}
