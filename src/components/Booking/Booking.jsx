import React, { useState } from 'react';

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
    image: "https://cdn.pixabay.com/photo/2015/01/10/11/39/hotel-595121_640.jpg",
  },
  {
    id: 3,
    name: "Family Room",
    amenities: "Free WiFi, Two Beds, Kitchenette",
    price: 8000,
    image: "https://cdn.pixabay.com/photo/2014/05/21/14/56/bedroom-349698_640.jpg",
  },
  {
    id: 4,
    name: "Luxury Suite",
    amenities: "Free WiFi, Ocean View, Mini Bar",
    price: 15000,
    image: "https://cdn.pixabay.com/photo/2024/06/27/08/50/ai-generated-8856798_640.jpg",
  },
  {
    id: 5,
    name: "Standard Room",
    amenities: "Free WiFi, Air Conditioning",
    price: 4000,
    image: "https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_640.jpg",
  },
  {
    id: 6,
    name: "Business Room",
    amenities: "Free WiFi, Desk, Coffee Maker",
    price: 6000,
    image: "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664222_640.jpg",
  },
  {
    id: 7,
    name: "Romantic Suite",
    amenities: "Free WiFi, Jacuzzi, City View",
    price: 12000,
    image: "https://cdn.pixabay.com/photo/2023/09/09/06/33/bedroom-8242522_640.jpg",
  },
  {
    id: 8,
    name: "Penthouse",
    amenities: "Free WiFi, Rooftop Pool, City View",
    price: 20000,
    image: "https://cdn.pixabay.com/photo/2020/01/15/18/02/room-4768554_640.jpg",
  },
  {
    id: 9,
    name: "Single Room",
    amenities: "Free WiFi, Single Bed",
    price: 3000,
    image: "https://cdn.pixabay.com/photo/2014/05/21/14/56/bedroom-349699_640.jpg",
  },
  {
    id: 10,
    name: "Economy Room",
    amenities: "Free WiFi, Shared Bathroom",
    price: 2500,
    image: "https://cdn.pixabay.com/photo/2016/03/02/20/41/hotel-1233020_640.jpg",
  },
];

function Booking() {
  const [name, setName] = useState('');
  const [roomId, setRoomId] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleBooking = () => {
    if (!name) {
      setConfirmation('Please enter your name to proceed with the booking.');
      setSelectedRoom(null);
      return;
    }

    const room = roomsData.find((r) => r.id === parseInt(roomId));
    if (room) {
      setSelectedRoom(room);
      setConfirmation(`Thank you ${name}, your room has been booked successfully!`);
    } else {
      setConfirmation(`Room ID ${roomId} not found. Please enter a valid Room ID.`);
      setSelectedRoom(null);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Book Your Room</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded mt-2 w-full"
      />
      <input
        type="number"
        placeholder="Enter Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        className="border p-2 rounded mt-2 w-full"
      />
      <button onClick={handleBooking} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Confirm Booking
      </button>
      {confirmation && <p className="mt-4 text-green-600">{confirmation}</p>}
      
      {selectedRoom && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Room Details</h3>
          <img src={selectedRoom.image} alt={selectedRoom.name} className="w-full h-48 object-cover rounded mt-2" />
          <p>Amenities: {selectedRoom.amenities}</p>
          <p>Price: ₹{selectedRoom.price}</p>
        </div>
      )}
    </div>
  );
}

export default Booking;




