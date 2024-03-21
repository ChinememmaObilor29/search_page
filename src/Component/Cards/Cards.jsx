import React, { useRef, useEffect } from 'react';
import "./Cards.css";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import all_products from "../assets/all_products";
import star from "../assets/25533.jpg";

const Cards = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Set the height of the iframe to match the height of the map section
    const mapHeight = mapRef.current.clientHeight;
    const iframe = document.getElementById('google-map-iframe');
    if (iframe) {
      iframe.style.height = `${mapHeight}px`;
    }
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-6 parent">
      {/* Displaying cards in three columns */}
      <div className="col-span-2 grid grid-cols-3 gap-2 child" ref={mapRef}>
        {all_products.map((card, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg shadow">
            
            <Link to={`/product/${index}`}>
              <img src={card.imageSrc} alt={card.title} className="w-full h-48 object-cover rounded-t-lg border-y-2" />
            </Link>
            <div className="p-3 details">
              <Link to={`/product/${index}`}>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 h-20 mb-4 title">{card.title}</h5>
              </Link>
              
              <p className="flex items-center font-semibold">
                {card.brand}
                <img src={star} alt="" className="w-8 ml-1" />
                <span className='mt-1 font-normal'>({card.rating})</span>
              </p>
          
              <p className='text-gray-700'>{card.distance}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-normal text-pink-300">{card.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Displaying the Google Map iframe */}
      <div className="md:col-span-2 map">
        <iframe
          id="google-map-iframe"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1256869.047065841!2d3.2416269152149474!3d9.085535223625863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d0d7d64e2bb19%3A0x35d7bd499308ad5!2sNigeria!5e0!3m2!1sen!2sng!4v1647230722356"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default Cards;
