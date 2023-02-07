package com.nct.store.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "orders")
@Getter
@Setter
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "order_tracking_number")
    private String orderTrackingNumber;
    @Column(name = "total_quantity")
    private int totalQuantity;
    @Column(name = "total_price")
    private BigDecimal totalPrice;
    @Column(name = "status")
    private String status;
    @Column(name = "date_created")
    @CreationTimestamp
    private Date dateCreated;
    @Column(name = "last_updated")
    @UpdateTimestamp
    private Date lastUpdated;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "order" , fetch = FetchType.LAZY)
    //@JoinColumn(name = "order_id")
    private Set<OrderItem> orderItems = new HashSet<>();

    public void add(OrderItem item){
        if(item!=null) {
            if(orderItems==null) {
                orderItems = new HashSet<>();
            }
        }
        orderItems.add(item);
        item.setOrder(this);
    }

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="shipping_address_id",referencedColumnName = "id")
    private Address shippingAddress;

    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "billing_address_id",referencedColumnName = "id")
    private Address billingAddress;
}
