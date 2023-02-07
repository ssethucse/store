package com.nct.store.controller;

import com.nct.store.dto.Response;
import com.nct.store.entity.Customer;
import com.nct.store.service.JwtTokenService;
import com.nct.store.service.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(value = {"*","http://localhost:4200"})
public class JwtAuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenService jwtTokenUtil;

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody Customer authenticationRequest) throws Exception {

        authenticate(authenticationRequest.getPhone(), authenticationRequest.getIdentity());

        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getPhone());

        final String token = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.status(200).body(new Response(token, ""
                , HttpStatus.OK.value(), "Successfully Token Sent", null));
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}
