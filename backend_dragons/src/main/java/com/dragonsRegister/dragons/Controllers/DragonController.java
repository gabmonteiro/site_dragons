package com.dragonsRegister.dragons.Controllers;

import com.dragonsRegister.dragons.DatabaseClasses.Dragon;
import com.dragonsRegister.dragons.DatabaseClasses.DragonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class DragonController {

    @Autowired
    private DragonService dragonService;

    @PostMapping("/newdragon")
    public HttpStatus RegistrarDragon(@RequestBody Dragon dragon) {
        dragonService.salvar(dragon);
        return dragon.Ok();
    }
}