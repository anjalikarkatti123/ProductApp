package com.gentech.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gentech.product.dto.ProductDto;
import com.gentech.product.service.ProductService;

@RestController
@RequestMapping("/v1/api")
@CrossOrigin("*")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@PostMapping("/product")
	public ResponseEntity<ProductDto> createProduct(@RequestBody ProductDto productDto){
		
		return new ResponseEntity<ProductDto>(productService.createProduct(productDto), HttpStatusCode.valueOf(201));	
	}

	@GetMapping("/product/{id}")
	public ResponseEntity<ProductDto> getSpecificProduct(@PathVariable Long id)
	{
		return new ResponseEntity<ProductDto>(productService.getProductById(id), HttpStatusCode.valueOf(200));
	}
	
	@GetMapping("/products")
	public ResponseEntity<List<ProductDto>> getProducts()
	{
		return new ResponseEntity<List<ProductDto>>(productService.getAllProducts(), HttpStatusCode.valueOf(200));
	}
	
	@PutMapping("/product/{id}")
	public ResponseEntity<ProductDto> modifySpecificProduct(@PathVariable Long id,
			@RequestBody ProductDto productDto)
	{
		return new ResponseEntity<ProductDto>(productService.updateProduct(id, productDto), HttpStatusCode.valueOf(200));
	}
	
	@DeleteMapping("/product/{id}")
	public ResponseEntity<String> deleteSpecificProduct(@PathVariable Long id)
	{
		productService.deleteById(id);
		return new ResponseEntity<String>("The Product id "+id+" has deleted from the database table successfully",HttpStatusCode.valueOf(200));
	}
}
