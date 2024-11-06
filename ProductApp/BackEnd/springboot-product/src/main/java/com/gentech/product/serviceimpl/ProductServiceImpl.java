package com.gentech.product.serviceimpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gentech.product.dto.ProductDto;
import com.gentech.product.entity.Product;
import com.gentech.product.mapper.ProductMapper;
import com.gentech.product.repository.ProductRepository;
import com.gentech.product.service.ProductService;
@Service
public class ProductServiceImpl implements ProductService{

	@Autowired
	private ProductRepository productRepository;
	
	@Override
	public ProductDto createProduct(ProductDto productDto) {
		Product product=ProductMapper.mapToProduct(productDto);
		Product saveproduct=productRepository.save(product);
		return ProductMapper.mapTpProductDto(saveproduct);
	}

	@Override
	public ProductDto getProductById(Long id) {
		
		Product product=productRepository.findById(id).orElseThrow(() ->
		 new RuntimeException("The Product Id "+id+" has not found in the database"));
		return ProductMapper.mapTpProductDto(product);
	}

	@Override
	public List<ProductDto> getAllProducts() {
		
		return productRepository.findAll()
				.stream().map((product) -> ProductMapper.mapTpProductDto(product))
				.collect(Collectors.toList());
	}

	@Override
	public ProductDto updateProduct(Long id, ProductDto productDto) {
		Product existingProduct=productRepository.findById(id).orElseThrow(() ->
		 new RuntimeException("The Product Id "+id+" has not found in the database"));
		
		existingProduct.setId(id);
		existingProduct.setProductName(productDto.getProductName());
		existingProduct.setProductType(productDto.getProductType());
		existingProduct.setProductDesc(productDto.getProductDesc());
		
		Product savedProduct=productRepository.save(existingProduct);
		return ProductMapper.mapTpProductDto(savedProduct);
	}

	@Override
	public void deleteById(Long id) {
		productRepository.findById(id).orElseThrow(() ->
		 new RuntimeException("The Product Id "+id+" has not found in the database"));
		
		productRepository.deleteById(id);
	}

}
