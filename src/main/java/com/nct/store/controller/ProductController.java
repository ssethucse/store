package com.nct.store.controller;

import com.nct.store.entity.Product;
import com.nct.store.entity.ProductCategory;
import com.nct.store.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
@CrossOrigin(value = "*")
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/getProducts")
    ResponseEntity<Page<Product>> getAllProducts(@RequestParam(defaultValue = "5", required = false)
                                                         Integer pageSize,
                                                 @RequestParam(defaultValue = "0", required = false)
                                                         Integer page) {
        return new ResponseEntity<>(productService.getProducts(page, pageSize), HttpStatus.OK);
    }

    @GetMapping("/getProducts/{id}")
    ResponseEntity<Page<Product>> getProductsById(@PathVariable Long id,
                                                  @RequestParam(defaultValue = "5", required = false)
                                                          Integer pageSize,
                                                  @RequestParam(defaultValue = "0", required = false)
                                                          Integer page) {
        return new ResponseEntity<>(productService.getProductsById(id, page, pageSize), HttpStatus.OK);
    }

    @GetMapping("/getInfo/{id}")
    ResponseEntity<Product> getProductById(@PathVariable Long id) {
        return new ResponseEntity<>(productService.getProductById(id), HttpStatus.OK);
    }

    @GetMapping("/getProducts/search/{name}")
    ResponseEntity<Page<Product>> getProductsByName(@PathVariable String name,
                                                    @RequestParam(defaultValue = "5", required = false)
                                                            Integer pageSize,
                                                    @RequestParam(defaultValue = "0", required = false)
                                                            Integer page) {
        return new ResponseEntity<>(productService.getProductsByName(name, page, pageSize), HttpStatus.OK);
    }

    @GetMapping("/getAllCategory")
    ResponseEntity<List<ProductCategory>> getAllCategory() {
        return new ResponseEntity<>(productService.getAllCategory(), HttpStatus.OK);
    }


}

