import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GalleryPage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/images/rotary');
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Rotary Club Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (
          <div key={image._id} className="relative group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              <img
                src={`http://localhost:5000${image.path}`}
                alt={image.filename}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;