package com.example.soma.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class NationalAward {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long awardId;
    private String awardTitle;
    private String awardLevel;
    private String status;
}
