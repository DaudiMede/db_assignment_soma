package com.example.soma.entity;

import jakarta.persistence.*;

@Entity
public class Programme {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long programmeId;
    private String programmeName;
    private String status;
    private String startingYear;
    @ManyToOne
    @JoinColumn(
            name = "COURSE_ID",
            referencedColumnName = "courseId"
    )
    private Course course;
    @OneToOne
    @JoinColumn(
            name = "NATIONAL_AWARD_ID",
            referencedColumnName = "awardId"
    )
    private NationalAward nationalAward;
}
