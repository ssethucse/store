package com.nct.store.service;

import com.nct.store.dto.UserCred;
import com.nct.store.entity.Role;
import com.nct.store.entity.User;

import java.util.List;

public interface UserService {
    User update(User users);

    User findDetails(String username);

    List<Role> findRoleDetails();

    List<User> findAllDetails();

    void delete(String username);

    boolean userValidate(UserCred users);
}
