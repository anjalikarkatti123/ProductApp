package com.gentech.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gentech.product.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}
