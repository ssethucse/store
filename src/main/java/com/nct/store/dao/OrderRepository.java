package com.nct.store.dao;

import com.nct.store.entity.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    @Query(value = "select * from orders left outer join customer on orders.customer_id = customer.id where customer.phone= :phone order by date_created desc ", nativeQuery = true)
    Page<Order> findCustAll(@Param("phone") String phone, Pageable pageable);

    @Query(value = "select * from orders left outer join customer on orders.customer_id = customer.id where customer.phone= :phone order by date_created desc ", nativeQuery = true)
    List<Order> findCustomer(@Param("phone") String phone);


    @Query(value = "select * from orders order by date_created desc LIMIT 1", nativeQuery = true)
    Order findOrderId();

    List<Order> findByCustomerId(@Param("id") Long id);
}
