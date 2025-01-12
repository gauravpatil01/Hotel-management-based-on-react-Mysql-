


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const roomsData = [
  {
        id: 1,
        name: "Deluxe Room",
        amenities: "Free WiFi, Air Conditioning, Pool View",
        price: 5000,
        image: "https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_640.jpg",
      },
      {
        id: 2,
        name: "Executive Suite",
        amenities: "Free WiFi, Breakfast Included, City View",
        price: 10000,
        image:
          "https://cdn.pixabay.com/photo/2015/01/10/11/39/hotel-595121_640.jpg",
      },
      {
        id: 3,
        name: "Family Room",
        amenities: "Free WiFi, Two Beds, Kitchenette",
        price: 8000,
        image:
          "https://cdn.pixabay.com/photo/2014/05/21/14/56/bedroom-349698_640.jpg",
      },
      {
        id: 4,
        name: "Luxury Suite",
        amenities: "Free WiFi, Ocean View, Mini Bar",
        price: 15000,
        image:
          "https://cdn.pixabay.com/photo/2024/06/27/08/50/ai-generated-8856798_640.jpg",
      },
      {
        id: 5,
        name: "Standard Room",
        amenities: "Free WiFi, Air Conditioning",
        price: 4000,
        image:
          "https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_640.jpg",
      },
      {
        id: 6,
        name: "Business Room",
        amenities: "Free WiFi, Desk, Coffee Maker",
        price: 6000,
        image:
          "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664222_640.jpg",
      },
      {
        id: 7,
        name: "Romantic Suite",
        amenities: "Free WiFi, Jacuzzi, City View",
        price: 12000,
        image:
          "https://cdn.pixabay.com/photo/2023/09/09/06/33/bedroom-8242522_640.jpg",
      },
      {
        id: 8,
        name: "Penthouse",
        amenities: "Free WiFi, Rooftop Pool, City View",
        price: 20000,
        image:
          "https://cdn.pixabay.com/photo/2020/01/15/18/02/room-4768554_640.jpg",
      },
      {
        id: 9,
        name: "Single Room",
        amenities: "Free WiFi, Single Bed",
        price: 3000,
        image:
          "https://cdn.pixabay.com/photo/2014/05/21/14/56/bedroom-349699_640.jpg",
      },
      {
        id: 10,
        name: "Economy Room",
        amenities: "Free WiFi, Shared Bathroom",
        price: 2500,
        image:
          "https://cdn.pixabay.com/photo/2016/03/02/20/41/hotel-1233020_640.jpg",
      },
];

function Rooms() {
  const [visibleRooms, setVisibleRooms] = useState([]);

  useEffect(() => {
    const timeoutIds = [];
    roomsData.forEach((room, index) => {
      const delay = index * 500; // 500 milliseconds for each room
      const timeoutId = setTimeout(() => {
        setVisibleRooms((prev) => [...prev, room]);
      }, delay);
      timeoutIds.push(timeoutId);
    });

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id)); // Cleanup timeouts on unmount
    };
  }, []);

  // Function to handle room deletion
  const handleDelete = (roomId) => {
    setVisibleRooms((prevRooms) =>
      prevRooms.filter((room) => room.id !== roomId)
    );
  };

  // Function to handle room editing
  const handleEdit = (updatedRoom) => {
    setVisibleRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === updatedRoom.id ? updatedRoom : room
      )
    );
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <Link
          to="/add-room"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Room
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {visibleRooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-lg shadow p-4 transition-opacity duration-500 opacity-100"
          >
            <h3 className="text-xl font-semibold">{room.name}</h3>
            <p>Amenities: {room.amenities}</p>
            <p>Price: ₹{room.price}</p>
            {room.image && (
              <img
                src={room.image}
                alt={`${room.name} image`}
                className="w-full h-48 object-cover rounded"
              />
            )}
            <Link to={`/room/${room.id}`} className="text-blue-500 underline">
              View Details
            </Link>
            <div className="mt-2 flex space-x-2">
              <Link
                to={`/edit-room/${room.id}`}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Edit Room
              </Link>
              <button
                onClick={() => handleDelete(room.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete Room
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
