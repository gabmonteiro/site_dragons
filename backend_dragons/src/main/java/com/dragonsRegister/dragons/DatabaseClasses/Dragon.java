package com.dragonsRegister.dragons.DatabaseClasses;

import org.springframework.data.annotation.Id;

public class Dragon {
    @Id
    private String id;
    private String nome;
    private String tipo;

    public Dragon(String id, String nome, String tipo) {
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
    }

    public Dragon(String nome, String tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    public Dragon(String id) {
        this.id = id;
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

    public void setId(int idNovo) {
        this.id = String.valueOf(idNovo);
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

}
