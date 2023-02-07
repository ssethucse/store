package com.nct.store.dao;

import com.nct.store.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface UserRolesRepository extends JpaRepository<Role,Integer> {
}
