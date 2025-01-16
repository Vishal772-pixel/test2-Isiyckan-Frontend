import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import {useCart} from "../context/CartContext"
import { useState
  
 } from 'react'

const products = [
  {
    id: 1,
    name: 'Modern Wooden Armchair',
    price: 299.99,
    rating: 4.5,
    image: '/assets/ModernwoodenChair.png',
    material: 'wood',
    category: 'chairs',
    inStock: true,
    description: 'Elegant wooden armchair with premium finish and comfort',
  },
  {
    id: 2,
    name: 'Leather Office Chair',
    price: 399.99,
    rating: 4.0,
    image: '/assets/LeatherChair.png',
    material: 'leather',
    category: 'chairs',
    inStock: true,
    description: 'Professional leather chair with ergonomic design',
  },
  {
    id: 3,
    name: 'Glass Coffee Table',
    price: 199.99,
    rating: 4.2,
    image: '/assets/GlassCoffeeTable.png',
    material: 'glass',
    category: 'tables',
    inStock: false,
    description: 'Modern glass coffee table with sleek design',
  },
  {
    id: 4,
    name: 'Metal Bookshelf',
    price: 149.99,
    rating: 3.8,
    image: '/assets/Frame (3).png',
    material: 'metal',
    category: 'storage',
    inStock: true,
    description: 'Industrial style metal bookshelf',
  },
]

export default function ProductDetails() {
  const { id } = useParams()
  const product = products.find((item) => item.id === Number(id))

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
      </div>
    )
  }
  const addItemToCart = () => {
     setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) => item.id === product.id);
      
      if (existingItemIndex >= 0) {
        // If the item already exists, update the quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += product.quantity;
        return updatedItems;
      } else {
        // If the item does not exist, add it to the cart
        return [...prevItems, product];
      }
    });

    // Show an alert that the item has been added
    alert(`${newProduct.name} has been added to your cart.`);
  };
  return (
    <div className="min-h-screen bg-secondary-50">
      <div className="container py-8">
        <div className="flex gap-8">
          <div className="w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg text-secondary-600 mb-4">
              {product.description}
            </p>
            <p className="text-lg font-bold mb-2">${product.price}</p>
            <p className="text-sm text-secondary-600 mb-4">
              Rating: {product.rating} ⭐
            </p>
            <p className="text-sm text-secondary-600 mb-4">
              Material: {product.material}
            </p>
            <Button variant="primary" className="w-full mb-4" onClick={addItemToCart}>
              Add to Cart
            </Button>
            <Link to="/">
              <Button variant="outline" className="w-full">
                Back to Listing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}