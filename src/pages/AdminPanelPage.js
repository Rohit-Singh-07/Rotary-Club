import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPanelPage = () => {
  const [selectedGallery, setSelectedGallery] = useState("rotary");
  const [selectedFile, setSelectedFile] = useState(null);
  const [images, setImages] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

  useEffect(() => {
    if (isLoggedIn) {
      fetchImages();
    }
  }, [selectedGallery, isLoggedIn]);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${API_URL}/api/images/${selectedGallery}`
      );
      setImages(response.data);
    } catch (error) {
      setError("Error fetching images. Please try again later.");
    }
    setLoading(false);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
  
    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('gallery', selectedGallery);
  
    try {
      await axios.post(`${API_URL}/api/upload`, formData); 
      setSelectedFile(null);
      setError('');
      fetchImages();
    } catch (error) {
      setError('Failed to upload image. Please try again later.');
    }
  };
  

  const handleDelete = async (imageId) => {
    try {
      await axios.delete(`${API_URL}/api/images/${imageId}`);
      fetchImages();
    } catch (error) {
      setError("Failed to delete image. Please try again later.");
    }
  };

  const handleLogin = () => {
    if (username === process.env.REACT_APP_ADMIN_USERNAME && password === process.env.REACT_APP_ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setError("");
  };

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Admin Login
        </h1>
        <div className="bg-gray-50 rounded-lg p-6 shadow-md max-w-sm mx-auto">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
          <button
            onClick={handleLogin}
            className="w-full px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Admin Panel
      </h1>

      <button
        onClick={handleLogout}
        className="w-full md:w-auto px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300 ease-in-out mb-8"
      >
        Logout
      </button>

      <div className="bg-gray-50 rounded-lg p-6 mb-8 shadow-md">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <select
            value={selectedGallery}
            onChange={(e) => setSelectedGallery(e.target.value)}
            className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="rotary">Rotary Club Gallery</option>
            <option value="redcross">Red Cross Gallery</option>
          </select>

          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            className="w-full md:w-auto text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />

          <button
            onClick={handleUpload}
            className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Upload Image
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Current Images
        </h2>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image) => (
              <div key={image._id} className="relative group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 shadow-md">
                  <img
                    src={`${API_URL}/api/images/${image._id}/image`} 
                    alt={image.filename}
                    className="object-cover w-full h-full"
                  />
                  <button
                    onClick={() => handleDelete(image._id)}
                    className="absolute bottom-2 right-2 px-3 py-1 bg-red-600 text-white rounded-md opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanelPage;
