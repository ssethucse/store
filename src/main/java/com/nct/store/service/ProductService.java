package com.nct.store.service;

import com.nct.store.dao.ProductCategoryRepository;
import com.nct.store.dao.ProductRepository;
import com.nct.store.entity.Product;
import com.nct.store.entity.ProductCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;
    @Autowired
    ProductCategoryRepository productCategory;

    public Page<Product> getProducts(Integer page, Integer pageSize) {
        Pageable paging = PageRequest.of(page, pageSize);
        return productRepository.findAll(paging);
    }

    public Page<Product> getProductsById(Long id, Integer page, Integer pageSize) {
        Pageable paging = PageRequest.of(page, pageSize);
        return productRepository.findByCategoryId(id, paging);
    }

    public List<ProductCategory> getAllCategory() {
        return productCategory.findAll();
    }

    public Page<Product> getProductsByName(String name, Integer page, Integer pageSize) {
        Pageable paging = PageRequest.of(page, pageSize);
        return productRepository.findByNameContaining(name, paging);
    }

    public Product getProductById(Long id) {
        Optional<Product> prod = productRepository.findById(id);
        if (prod.isPresent()) {
            return prod.get();
        } else {
            return null;
        }
    }
}
