package com.example.soma.entity;

import jakarta.persistence.*;

@Entity
public class ProgrammeModule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long programmeModuleId;
    @OneToOne
    @JoinColumn(
            name = "LECTURER_ID"
    )
    private Staff lecturer;
    @OneToOne
    @JoinColumn(
            name = "MODULE_ID",
            referencedColumnName = "moduleId"
    )
    private Module module;
    @ManyToOne
    @JoinColumn(
            name = "PROGRAMME_ID",
            referencedColumnName = "programmeId"
    )
    private Programme programme;
}
