import React from 'react';

const Product = props => {
	return (
		<div className="product">
			<img src={props.product.image} alt={`${props.product.title} book`} data-pin-nopin="true" />
			<div className="productDetails">
				<h1 className="title">{props.product.title}</h1>
				<p className="price">${props.product.price}</p>
			</div>

			<button onClick={() => props.addItem(props.product)}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
