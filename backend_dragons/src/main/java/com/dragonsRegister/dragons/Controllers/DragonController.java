package com.dragonsRegister.dragons.Controllers;

import com.dragonsRegister.dragons.DatabaseClasses.Dragon;
import com.dragonsRegister.dragons.DatabaseClasses.DragonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.List;

@Controller
public class DragonController {

    @Autowired
    private DragonService dragonService;

    @PostMapping(path="/newdragon", produces = MediaType.APPLICATION_JSON_VALUE, headers = "Accept=*/*", consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody String RegistrarDragon(@RequestBody Dragon dragon) {
        dragonService.salvar(dragon);
        return "Registro Concluído";
    }

    @GetMapping("/receivedragon")
    public ResponseEntity<List<Dragon>> getAllDragons() {
        List<Dragon> dragons = dragonService.getDragons();
        return new ResponseEntity<>(dragons, HttpStatus.OK);
    }
}