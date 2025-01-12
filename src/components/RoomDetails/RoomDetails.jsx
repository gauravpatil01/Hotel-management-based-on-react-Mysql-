
import React from 'react';
import { useParams } from 'react-router-dom';

const roomDetailsData = {
  1: {
    name: 'Deluxe Room',
    amenities: 'Free WiFi, Air Conditioning, Pool View',
    price: 5000,
    description: 'A luxurious room with a beautiful pool view, perfect for relaxation.',
    image: "https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_640.jpg",
  },
  2: {
    name: 'Executive Suite',
    amenities: 'Free WiFi, Breakfast Included, City View',
    price: 10000,
    description: 'An elegant suite with all the amenities for a comfortable stay.',
    image: 'https://cdn.pixabay.com/photo/2015/01/10/11/39/hotel-595121_640.jpg',
  },
  3: {
    name: 'Family Room',
    amenities: 'Free WiFi, Two Beds, Kitchenette',
    price: 8000,
    description: 'Perfect for families, this room offers spacious comfort and modern amenities.',
    image: 'https://cdn.pixabay.com/photo/2014/05/21/14/56/bedroom-349698_640.jpg',
  },
  4: {
    name: 'Luxury Suite',
    amenities: 'Free WiFi, Ocean View, Mini Bar',
    price: 15000,
    description: 'Experience luxury with an ocean view and all premium amenities.',
    image: 'https://cdn.pixabay.com/photo/2024/06/27/08/50/ai-generated-8856798_640.jpg',
  },
  5: {
    name: 'Standard Room',
    amenities: 'Free WiFi, Air Conditioning',
    price: 4000,
    description: 'A comfortable standard room with essential amenities.',
    image: 'https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_640.jpg',
  },
  6: {
    name: 'Business Room',
    amenities: 'Free WiFi, Desk, Coffee Maker',
    price: 6000,
    description: 'Ideal for business travelers, equipped with a work desk and coffee maker.',
    image: 'https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664222_640.jpg',
  },
  7: {
    name: 'Romantic Suite',
    amenities: 'Free WiFi, Jacuzzi, City View',
    price: 12000,
    description: 'A romantic suite with a jacuzzi and a beautiful city view.',
    image: 'https://cdn.pixabay.com/photo/2023/09/09/06/33/bedroom-8242522_640.jpg',
  },
  8: {
    name: 'Penthouse',
    amenities: 'Free WiFi, Rooftop Pool, City View',
    price: 20000,
    description: 'The penthouse offers a luxurious rooftop pool and stunning city views.',
    image: 'https://cdn.pixabay.com/photo/2020/01/15/18/02/room-4768554_640.jpg',
  },
  9: {
    name: 'Single Room',
    amenities: 'Free WiFi, Single Bed',
    price: 3000,
    description: 'A cozy single room for solo travelers with all essential facilities.',
    image: 'https://cdn.pixabay.com/photo/2014/05/21/14/56/bedroom-349699_640.jpg',
  },
  10: {
    name: 'Economy Room',
    amenities: 'Free WiFi, Shared Bathroom',
    price: 2500,
    description: 'An affordable economy room with shared bathroom facilities.',
    image: 'https://cdn.pixabay.com/photo/2016/03/02/20/41/hotel-1233020_640.jpg',
  },
};

function RoomDetails() {
  const { roomId } = useParams();
  const room = roomDetailsData[roomId];

  return (
    <div className="p-4">
      {room ? (
        <>
          <h2 className="text-3xl font-bold">{room.name}</h2>
          <p>Amenities: {room.amenities}</p>
          <p>Price: ₹{room.price}</p>
          <p>{room.description}</p>
          {room.image && <img src={room.image} alt={`${room.name} image`} className="w-full h-64 object-cover rounded" />}
          <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">Book Now</button>
        </>
      ) : (
        <p>Room not found.</p>
      )}
    </div>
  );
}

export default RoomDetails;
