import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRoom() {
  const navigate = useNavigate();
  const [roomData, setRoomData] = useState({
    id: Date.now(), // Create a unique ID
    name: "",
    amenities: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setRoomData({ ...roomData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Room Data Submitted:", roomData);
    // Use navigate to pass the new room data to the Rooms page
    navigate("/rooms", { state: { newRoom: roomData } });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Add a New Room</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          Room Name:
          <input
            type="text"
            name="name"
            value={roomData.name}
            onChange={handleChange}
            className="input input-bordered w-full p-2 mt-2"
            required
          />
        </label>
        <label className="block">
          Amenities:
          <input
            type="text"
            name="amenities"
            value={roomData.amenities}
            onChange={handleChange}
            className="input input-bordered w-full p-2 mt-2"
            required
          />
        </label>
        <label className="block">
          Price:
          <input
            type="number"
            name="price"
            value={roomData.price}
            onChange={handleChange}
            className="input input-bordered w-full p-2 mt-2"
            required
          />
        </label>
        <label className="block">
          Image URL:
          <input
            type="text"
            name="image"
            value={roomData.image}
            onChange={handleChange}
            className="input input-bordered w-full p-2 mt-2"
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Room
        </button>
      </form>
    </div>
  );
}

export default AddRoom;




