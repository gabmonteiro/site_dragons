package com.dragonsRegister.dragons.Controllers;

import com.dragonsRegister.dragons.DatabaseClasses.Dragon;
import com.dragonsRegister.dragons.DatabaseClasses.DragonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class DragonController {

    @Autowired
    private DragonService dragonService;

    @PostMapping(path="/dragons", produces = MediaType.APPLICATION_JSON_VALUE, headers = "Accept=*/*", consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody HttpStatus RegistrarDragon(@RequestBody Dragon dragon) {
        int id = dragonService.checarId();
        dragon.setId(id);
        dragonService.salvar(dragon);
        return HttpStatus.CREATED;
    }

    @GetMapping("/dragons")
    public ResponseEntity<List<Dragon>> getAllDragons() {
        List<Dragon> dragons = dragonService.getAllDragons();
        return new ResponseEntity<>(dragons, HttpStatus.OK);
    }

    @GetMapping("/dragons/{id}")
    @ResponseBody
    public Dragon getDragon(@PathVariable String id) {
        return dragonService.getDragon(id);
    }

    @DeleteMapping(path="/dragons/{id}")
    @ResponseBody
    public HttpStatus deletarDragon(@PathVariable String id) {
        dragonService.deletar(id);
        return HttpStatus.OK;
    }

    @PutMapping(path="/dragons/{id}", produces = MediaType.APPLICATION_JSON_VALUE, headers = "Accept=*/*", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public HttpStatus atualizarDragon(@PathVariable int id, @RequestBody Dragon dragon) {
        dragon.setId(id);
        dragon = dragonService.checaEAtualizaNomeETipoSeNecessario(dragon);
        dragonService.salvar(dragon);
        return HttpStatus.OK;
    }

//    @PostMapping(path="/dragon/update", produces = MediaType.APPLICATION_JSON_VALUE, headers = "Accept=*/*", consumes = MediaType.APPLICATION_JSON_VALUE)
//    public @ResponseBody HttpStatus atualizarDragon(@RequestBody Dragon dragon) {
//        dragon = dragonService.checaEAtualizaNomeETipoSeNecessario(dragon);
//        dragonService.salvar(dragon);
//        return HttpStatus.OK;
//    }
}