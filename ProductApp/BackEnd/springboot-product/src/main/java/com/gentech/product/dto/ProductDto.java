package com.gentech.product.dto;

import java.util.Date;

import com.gentech.product.entity.Product;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDto {
	
	private Long id;
	private String productName;
	private String productType;
	private String productDesc;
	private Date createdAt;
	private Date updatedAt;

}
