package com.nct.store.service;

import com.nct.store.dao.UserRolesRepository;
import com.nct.store.dao.UsersRepository;
import com.nct.store.dto.UserCred;
import com.nct.store.entity.Role;
import com.nct.store.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UsersRepository usersRepository;
    @Autowired
    UserRolesRepository rolesRepository;
    @Autowired
    UtilityService utilityService;

    @Override
    public User update(User users) {
        if (users.getId() == null) {
            User user = usersRepository.findTopByOrderByIdDesc();
            if (user != null && user.getId() != null) {
                users.setId(utilityService.getSid(user.getId()));
            } else {
                users.setId(1);
            }
        }

        for(Role role: users.getRole()){
            role.setCreatedDate(utilityService.getInstantTime());
            role.setUpdatedDate(utilityService.getInstantTime());
        }

        if (users.getCreatedDate() == null) {
            users.setCreatedDate(utilityService.getInstantTime());
        }
        users.setUpdatedDate(utilityService.getInstantTime());
        return usersRepository.save(users);
    }

    @Override
    public User findDetails(String username) {
        return usersRepository.findAllByUsername(username);
    }

    @Override
    public List<Role> findRoleDetails() {
        return rolesRepository.findAll();
    }

    @Override
    public List<User> findAllDetails() {
        return usersRepository.findAll();
    }

    @Override
    public void delete(String username) {
        try {
            User list = usersRepository.findAllByUsername(username);
            if (list != null) {
                usersRepository.delete(list);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public boolean userValidate(UserCred users) {
        if(users.getPhone()!=null && users.getIdentity()!=null){
            User user = usersRepository.findAllByUsername(users.getPhone());
            String pass = String.copyValueOf(user.getPassword());
            String pass1 = String.copyValueOf(users.getIdentity());

            if(pass.equalsIgnoreCase(pass1)){
                return true;
            }
        }
        return false;
    }
}
