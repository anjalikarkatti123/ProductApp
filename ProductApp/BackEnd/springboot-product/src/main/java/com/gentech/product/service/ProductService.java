package com.gentech.product.service;

import java.util.List;

import com.gentech.product.dto.ProductDto;

public interface ProductService {
	
	ProductDto createProduct(ProductDto product);
	
	ProductDto getProductById(Long id);

	List<ProductDto> getAllProducts();
	
	ProductDto updateProduct(Long id, ProductDto product);
	
	void deleteById(Long id);
}
