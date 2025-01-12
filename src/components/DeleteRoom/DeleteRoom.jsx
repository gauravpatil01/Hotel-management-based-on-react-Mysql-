import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DeleteRoom() {
  const { id } = useParams(); // Get the room id from URL
  const navigate = useNavigate();

  const [roomData, setRoomData] = useState({
    id: id,
    name: "",
    amenities: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    // Fetch the room data using the `id`
    fetchRoomData(id); // Assume this function fetches room data based on `id`
  }, [id]);

  const fetchRoomData = (id) => {
    // Example: Fetch room details from a local array or API
    // You can replace this with actual data fetching logic (like from a backend or local state)
    const room = {
      id: id,
      name: "Room Name Example",
      amenities: "WiFi, AC",
      price: "2000",
      image: "image_url_here",
    };
    setRoomData(room);
  };

  const handleDelete = () => {
    // Logic to delete room from your data (can be from local state, API, etc.)
    console.log(`Deleting room with ID: ${roomData.id}`);
    // Assume you remove the room from a state or database here
    
    // Redirect to rooms page after deleting
    navigate("/rooms", { state: { deletedRoomId: roomData.id } });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Delete Room</h2>
      <p>Are you sure you want to delete the room?</p>
      <div>
        <p><strong>Room Name:</strong> {roomData.name}</p>
        <p><strong>Amenities:</strong> {roomData.amenities}</p>
        <p><strong>Price:</strong> {roomData.price}</p>
        <p><strong>Image URL:</strong> {roomData.image}</p>
      </div>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
      >
        Delete Room
      </button>
    </div>
  );
}

export default DeleteRoom;
