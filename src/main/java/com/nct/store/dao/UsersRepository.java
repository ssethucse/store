package com.nct.store.dao;

import com.nct.store.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<User,Integer> {
    User findTopByOrderByIdDesc();
    User findAllByUsername(String name);
}
