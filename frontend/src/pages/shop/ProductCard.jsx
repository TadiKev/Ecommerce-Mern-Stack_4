import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import RatingStars from '../../components/RatingStars';
import { addToCart } from '../../redux/features/cart/cartSlice'; 

const ProductCard = ({ products = [] }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch the product to the cart
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product._id} className="product__card">
          <div className="relative">
            <Link to={`/shop/${product._id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="max-h-96 md:h-64 w-full hover:scale-105 transition-all duration-300"
              />
            </Link>
            <div className="absolute top-3 right-3">
              <button onClick={() => handleAddToCart(product)}>
                <i className="ri-shopping-cart-2-line bg-primary p-1.5 text-white hover:bg-primary-dark"></i>
              </button>
            </div>

            {/* Product description */}
            <div className="product__card__content">
              <h4>{product.name}</h4>
              <p>
                ${product.price}
                {product.oldPrice && <s className="text-gray-500 ml-2">${product.oldPrice}</s>}
              </p>
              <RatingStars rating={product.rating} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
