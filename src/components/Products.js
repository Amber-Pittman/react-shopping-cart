// import the useContext Hook here to consume data
import React, { useContext } from 'react';

// Components
import Product from './Product';

// import Context here for consumation
import { ProductContext } from "../contexts/ProductContext";


const Products = props => {
	// Call the useContext Hook for consumation
	// Destructure products and addItem
	const { products, addItem } = useContext(ProductContext);

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
