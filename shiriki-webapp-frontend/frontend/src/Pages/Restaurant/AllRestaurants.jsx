import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide, Zoom } from "react-slideshow-image";
import { Link } from 'react-router-dom';
import { ChevronRight, Star } from 'lucide-react';
import ceasarsaladImage from "../../assets/images/Caesar Salad.jpg";
import chickensandwichImage from "../../assets/images/chickensandwich.jpg";
import vanillaconeImage from "../../assets/images/Vanilla Cone.jpg";
import sundaeImage from "../../assets/images/Sundae.jpg";
import frenchfriesImage from "../../assets/images/French Fries.jpg";
import kfcImage from "../../assets/images/kfc.png";
import creamyinnImage from "../../assets/images/creamyinn.png";
import bkImage from "../../assets/images/bk.png";

const slideImages = [
    {
        img: kfcImage,
        caption: 'KFC',
        description: 'Finger-Lickin\' Good Chicken',
        link: '/services/restaurant/1',
        rating: 4.5
    },
    {
        img: bkImage,
        caption: 'Burger King',
        description: 'Have it Your Way',
        link: '/services/restaurant/2',
        rating: 4.2
    },
    {
        img: creamyinnImage,
        caption: 'Creamy Inn',
        description: 'Desserts to Delight',
        link: '/services/restaurant/3',
        rating: 4.7
    },
];

const popularDishes = [
    {
        name: 'Zinger Burger',
        url: chickensandwichImage,
        price: '$5.99'
    },
    {
        name: 'Caesar Salad',
        url: ceasarsaladImage,
        price: '$5.99'
    },
    {
        name: 'French Fries',
        url: frenchfriesImage,
        price: '$5.99'
    },
    {
        name: 'Ice Cream',
        url: vanillaconeImage,
        price: '$3.49'
    },
    {
        name: 'Choco Sundae',
        url: sundaeImage,
        price: '$4.29'
    }
];

const AllRestaurants = () => {
    return (
        <div className="bg-white p-4 min-h-screen">
            {/* Popular Dishes Section */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">Popular Dishes</h2>
                    <Link to="/dishes" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                        View All <ChevronRight className="ml-1" size={20} />
                    </Link>
                </div>

                <Slide
    slidesToScroll={3}
    slidesToShow={3}
    arrows={false}
    responsive={[
        { breakpoint: 800, settings: { slidesToShow: 2, slidesToScroll: 2 } },
        { breakpoint: 500, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]}
>
    {popularDishes.map((dish, index) => (
        <div key={index} className="px-2">
            <div className="relative group">
                {/* Dish Image with Hover Effect */}
                <div
                    className="w-full h-48 rounded-lg bg-cover bg-center transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl"
                    style={{ backgroundImage: `url(${dish.url})` }} // Correctly referencing the image URL
                >
                    {/* Overlay with Smooth Transition */}
                    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg"></div>
                </div>
                {/* Dish Details with Animations */}
                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xl font-semibold">{dish.name}</span>
                    <span className="text-white text-lg font-bold mt-2">{dish.price}</span>
                </div>
            </div>
        </div>
    ))}
</Slide>

            </div>

            {/* Restaurants to Visit Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Restaurants to Visit</h2>
                <Zoom scale={0.9}>
                    {slideImages.map((restaurant, index) => (
                        <Link to={restaurant.link} key={index} className="block">
                            <div className="relative rounded-lg overflow-hidden shadow-lg">
                                <div
                                    className="w-full h-64 bg-cover bg-center transition-transform duration-300 hover:scale-105"
                                    style={{ backgroundImage: `url(${restaurant.img})` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h3 className="text-xl font-bold">{restaurant.caption}</h3>
                                                <p className="text-sm">{restaurant.description}</p>
                                            </div>
                                            <div className="flex items-center">
                                                <Star className="text-yellow-400 mr-1" size={20} fill="currentColor" />
                                                <span className="font-semibold">{restaurant.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Zoom>
            </div>
        </div>
    );
};

export default AllRestaurants;
