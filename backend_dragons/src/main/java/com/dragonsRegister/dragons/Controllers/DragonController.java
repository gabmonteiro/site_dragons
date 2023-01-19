package com.dragonsRegister.dragons.Controllers;

import com.dragonsRegister.dragons.DatabaseClasses.DragonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class DragonController {
    @Autowired
    private DragonService dragonService;

    /*@PostMapping("/newdragon")
    public String novoDragon() {

    }

     */
}