package com.example.soma.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class NtaLevel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private long id;
    @Column(name = "NTA_LEVEL")
    private int ntaLevel;
    @Column(name = "NUMBER_OF_SEMESTER")
    private int numberOfSemester;
}
