package com.dragonsRegister.dragons.DatabaseClasses;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DragonService {

    @Autowired
    private DragonRepository dragonRepository;

    public void salvar(Dragon dragon) {
        this.dragonRepository.save(dragon);
    }

    public void deletar(Dragon dragon) {
        String id = dragon.getId();
        this.dragonRepository.deleteById(id);
    }

    public List<Dragon> getDragons() {
        List<Dragon> dragons = new ArrayList<>();
        dragonRepository.findAll().forEach(dragons::add);
        return dragons;
    }

    public int checarId() {
        int idNovo = 0;
        boolean livreOuNao=false;
        while(livreOuNao==false) {
            if(dragonRepository.existsById(String.valueOf(idNovo))==true) {
                idNovo++;
            } else {
                livreOuNao=true;
            }
        }
        return idNovo;
    }
}
