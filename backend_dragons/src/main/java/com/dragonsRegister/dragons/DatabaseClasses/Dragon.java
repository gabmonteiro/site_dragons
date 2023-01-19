package com.dragonsRegister.dragons.DatabaseClasses;

import org.springframework.data.annotation.Id;
import org.springframework.http.HttpStatus;

public class Dragon {
    @Id
    private String id;
    private String nome;
    private String tipo;

    public HttpStatus Ok() {
        return HttpStatus.OK;
    }

    public Dragon(String id, String nome, String tipo) {
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
    }

    public Dragon(String nome, String tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    public Dragon() {

    }

    public String getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getTipo() {
        return tipo;
    }
}
