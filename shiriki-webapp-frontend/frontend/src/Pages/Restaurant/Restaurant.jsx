import React, { useState } from "react";
import { ShoppingCart, Star } from "lucide-react";
import avocadoToastImage from "../../assets/images/Avocado Toast.jpg";
import croissantImage from "../../assets/images/Egg & Cheese Croissant.jpg";
import pancakeImage from "../../assets/images/Pancakes.jpg";
import oatmealImage from "../../assets/images/Oatmeal Bowl.jpg";
import breakfastburritoImage from "../../assets/images/Breakfast Burrito.jpg";
import bagelImage from "../../assets/images/Bagel with Cream Cheese.jpg";
import whooperImage from "../../assets/images/whooper.jpeg";
import ceasarsaladImage from "../../assets/images/Caesar Salad.jpg";
import chickensandwichImage from "../../assets/images/chickensandwich.jpg";
import grilledcheesesandwichImage from "../../assets/images/Grilled Cheese Sandwich.jpg";
import spaghettiImage from "../../assets/images/Spaghetti Bolognese.jpg";
import veggiewrapimage from "../../assets/images/Veggie Wrap.jpg";
import frenchfriesImage from "../../assets/images/French Fries.jpg";
import onionringsImage from "../../assets/images/Onion Rings.jpg";
import chipsandsalsaImage from "../../assets/images/Chips & Salsa.jpg";
import pretzelsImage from "../../assets/images/Pretzels.jpg";
import mozzarellasticksImage from "../../assets/images/Mozzarella Sticks.jpg";
import popcornImage from "../../assets/images/Popcorn.jpg";
import cokeImage from "../../assets/images/Coke.jpg";
import milkshakeImage from "../../assets/images/Milkshake.jpg";
import icedteaImage from "../../assets/images/Iced Tea.jpg";
import smoothieImage from "../../assets/images/Smoothie.jpg";
import vanillaconeImage from "../../assets/images/Vanilla Cone.jpg";
import sundaeImage from "../../assets/images/Sundae.jpg";
import chocolatefudgeImage from "../../assets/images/Chocolate Fudge.jpg";
import strawberryscoopImage from "../../assets/images/Strawberry Scoop.jpg";

const Restaurant = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const menuCategories = {
    Breakfast: [
      {
        id: 1,
        name: "Egg & Cheese Croissant",
        price: "$3.99",
        img: croissantImage,
        description: "Fluffy eggs and melted cheese on a buttery croissant.",
        rating: 4.5,
      },
      {
        id: 2,
        name: "Pancakes",
        price: "$5.49",
        img: pancakeImage,
        description: "Stack of fluffy pancakes with syrup.",
        rating: 4.7,
      },
      {
        id: 11,
        name: "Avocado Toast",
        price: "$4.99",
        img: avocadoToastImage,
        description: "Toasted bread topped with fresh avocado.",
        rating: 4.6,
      },
      {
        id: 12,
        name: "Oatmeal Bowl",
        price: "$3.49",
        img: oatmealImage,
        description: "Warm oatmeal with fresh fruits and honey.",
        rating: 4.8,
      },
      {
        id: 13,
        name: "Breakfast Burrito",
        price: "$5.99",
        img: breakfastburritoImage,
        description: "Scrambled eggs, cheese, and veggies in a tortilla.",
        rating: 4.5,
      },
      {
        id: 14,
        name: "Bagel with Cream Cheese",
        price: "$2.99",
        img: bagelImage,
        description: "Fresh bagel served with cream cheese.",
        rating: 4.4,
      },
    ],
    Burgers: [
      {
        id: 3,
        name: "Whopper",
        price: "$6.99",
        img: whooperImage,
        description: "Classic flame-grilled beef patty with lettuce, tomato, and pickles.",
        rating: 4.8,
      },
      {
        id: 4,
        name: "Chicken Sandwich",
        price: "$5.99",
        img: chickensandwichImage,
        description: "Crispy chicken fillet with mayo and lettuce.",
        rating: 4.6,
      },
    ],
    Salads: [
      {
        id: 5,
        name: "Caesar Salad",
        price: "$4.99",
        img: ceasarsaladImage,
        description: "Crisp romaine lettuce with Caesar dressing and croutons.",
        rating: 4.7,
      },
      {
        id: 6,
        name: "Veggie Wrap",
        price: "$4.49",
        img: veggiewrapimage,
        description: "Fresh vegetables wrapped in a soft tortilla.",
        rating: 4.4,
      },
    ],
    Sides: [
      {
        id: 7,
        name: "French Fries",
        price: "$2.49",
        img: frenchfriesImage,
        description: "Crispy golden fries served with ketchup.",
        rating: 4.5,
      },
      {
        id: 8,
        name: "Onion Rings",
        price: "$2.99",
        img: onionringsImage,
        description: "Crispy battered onion rings.",
        rating: 4.6,
      },
      {
        id: 9,
        name: "Chips & Salsa",
        price: "$1.99",
        img: chipsandsalsaImage,
        description: "Tortilla chips served with fresh salsa.",
        rating: 4.4,
      },
      {
        id: 10,
        name: "Pretzels",
        price: "$3.49",
        img: pretzelsImage,
        description: "Soft and salty pretzels.",
        rating: 4.5,
      },
    ],
    Snacks: [
      {
        id: 15,
        name: "Mozzarella Sticks",
        price: "$4.99",
        img: mozzarellasticksImage,
        description: "Golden fried mozzarella sticks served with marinara sauce.",
        rating: 4.7,
      },
      {
        id: 16,
        name: "Popcorn",
        price: "$1.49",
        img: popcornImage,
        description: "Freshly popped popcorn.",
        rating: 4.3,
      },
    ],
    Drinks: [
      {
        id: 17,
        name: "Coke",
        price: "$1.99",
        img: cokeImage,
        description: "Classic Coca-Cola.",
        rating: 4.6,
      },
      {
        id: 18,
        name: "Milkshake",
        price: "$3.99",
        img: milkshakeImage,
        description: "Creamy milkshake in chocolate, vanilla, or strawberry.",
        rating: 4.8,
      },
      {
        id: 19,
        name: "Iced Tea",
        price: "$2.49",
        img: icedteaImage,
        description: "Chilled iced tea served with lemon.",
        rating: 4.5,
      },
      {
        id: 20,
        name: "Smoothie",
        price: "$3.49",
        img: smoothieImage,
        description: "Fresh fruit smoothie with a choice of flavors.",
        rating: 4.7,
      },
    ],
    Desserts: [
      {
        id: 21,
        name: "Vanilla Cone",
        price: "$1.99",
        img: vanillaconeImage,
        description: "Creamy vanilla ice cream in a cone.",
        rating: 4.6,
      },
      {
        id: 22,
        name: "Sundae",
        price: "$2.99",
        img: sundaeImage,
        description: "Classic sundae with chocolate syrup.",
        rating: 4.7,
      },
      {
        id: 23,
        name: "Chocolate Fudge",
        price: "$3.49",
        img: chocolatefudgeImage,
        description: "Rich chocolate fudge cake.",
        rating: 4.8,
      },
      {
        id: 24,
        name: "Strawberry Scoop",
        price: "$2.49",
        img: strawberryscoopImage,
        description: "Fresh strawberry ice cream scoop.",
        rating: 4.5,
      },
    ],
  };

  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-3xl font-extrabold text-gray-800 tracking-tight">
            Burger King Menu
          </p>
          <p className="mt-4 text-xl text-gray-600">
            Explore our delicious categories
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(menuCategories).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-[0.5rem] shadow-md transition-transform duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-blue-600 border border-blue-600"
              } hover:shadow-lg active:translate-y-[2px]`}
            >
              {category}
            </button>
          ))}
        </div>

        {selectedCategory && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {selectedCategory}
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {menuCategories[selectedCategory].map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <div className="relative">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-2 right-2 flex items-center space-x-1 bg-white bg-opacity-90 px-2 py-1 rounded-full text-sm">
                      <Star className="text-yellow-500 w-4 h-4" fill="currentColor" />
                      <span className="text-gray-800 font-semibold">
                        {item.rating}
                      </span>
                    </div>
                  </div>
                  <div className="p-3">
 
  
               <div className="flex justify-between grid-cols-2 items-center mb-2">
               <div className="truncate">  
                    <h2
                      className="text-md font-bold text-gray-800 truncate"
                      title={item.name}
                    >
                      {item.name}
                    </h2>
               </div>
               <div>
                    <span className="text-gray-600 text-sm font-semibold ml-2">
                      {item.price}
                    </span>
               </div>
                  </div>

                    <p
                      className="text-gray-600 text-sm truncate"
                      title={item.description}
                    >
                      {item.description}
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                    <button className="flex items-center rounded-[0.5rem] bg-blue-600 text-white hover:text-blue-800 px-2.5">
                        <ShoppingCart className="w-4 h-4 mr-1" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Restaurant;
