package com.dragonsRegister.dragons.DatabaseClasses;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.stereotype.Indexed;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class DragonService {

    @Autowired
    private DragonRepository dragonRepository;

    public void salvar(Dragon dragon) {
        this.dragonRepository.save(dragon);
    }

    public void deletar(String id) {
        this.dragonRepository.deleteById(id);
    }

    public List<Dragon> getAllDragons() {
        List<Dragon> dragons = new ArrayList<>();
        dragonRepository.findAll().forEach(dragons::add);
        return dragons;
    }

    public Dragon getDragon(String id) {
        return dragonRepository.findById(id).get();
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

    public Dragon checaEAtualizaNomeETipoSeNecessario(Dragon dragon) {
        Dragon dragonBanco = new Dragon();
        dragonBanco = dragonRepository.findById(dragon.getId()).get();
        if(dragon.getNome()==null||dragon.getNome()=="") {
            dragon.setNome(dragonBanco.getNome());
        }
        if(dragon.getTipo()==null||dragon.getTipo()=="") {
            dragon.setTipo(dragonBanco.getTipo());
        }
        return dragon;
    }
}
