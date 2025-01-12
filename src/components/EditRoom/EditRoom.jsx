


import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function EditRoom() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the room data from the previous page 
  const [roomData, setRoomData] = useState({
    id: Date.now(),
    name: "",
    amenities: "",
    price: "",
    image: "",
  });

  // If there is room data passed via the location state, use that for editing
  useEffect(() => {
    if (location.state && location.state.roomToEdit) {
      setRoomData(location.state.roomToEdit);
    }
  }, [location]);

  const handleChange = (e) => {
    setRoomData({ ...roomData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Room Data:", roomData);
    // Use navigate to pass the updated room data back to the Rooms page
    navigate("/rooms", { state: { updatedRoom: roomData } });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Room</h2>
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
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditRoom;
