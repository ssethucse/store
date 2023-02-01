package com.nct.store.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "customer")
@Getter
@Setter
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "email")
    private String email;

    @OneToMany(mappedBy ="customer", cascade = CascadeType.ALL)
    //@JoinColumn(name = "customer_id")
    private Set<Order> orders = new HashSet<>();

    public void add(Order order){
        if(order==null){
            orders = new HashSet<>();
        }
        orders.add(order);
        order.setCustomer(this);
    }
}
