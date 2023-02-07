package com.nct.store.entity;

import lombok.Data;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "nct_user")
@Data
public class User {
    @Id
    private Integer id;
    private String username;
    private char[] password;
    private String mobile;
    private String mail;
    private Integer enabled;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "users_id")
    private List<Role> role;

    @Column(name = "created_date")
    private Timestamp createdDate;
    @Column(name = "updated_date")
    private Timestamp updatedDate;
}
