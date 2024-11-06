package com.gentech.product.mapper;

import com.gentech.product.dto.ProductDto;
import com.gentech.product.entity.Product;

public class ProductMapper {
	
	public static Product mapToProduct(ProductDto productDto)
	{
		Product product = new Product(
				productDto.getId(),
				productDto.getProductName(),
				productDto.getProductType(),
				productDto.getProductDesc(),
				productDto.getCreatedAt(),
				productDto.getUpdatedAt()
				);
		return product;
	}
	
	public static ProductDto mapTpProductDto(Product product)
	{
		ProductDto productDto=new ProductDto(
				product.getId(),
				product.getProductName(),
				product.getProductType(),
				product.getProductDesc(),
				product.getCreatedAt(),
				product.getUpdatedAt());
		
		return productDto;
	}

}
