import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ShoeDetailsPage() {
  const { shoeId } = useParams();
  const [shoe, setShoe] = useState(null);

  if (!shoe) {
    return <div>Loading...</div>;
  }
  useEffect(() => {
    axios
      .get(`https://63f763fb833c7c9c6082f429.mockapi.io/shoesForSale/${shoeId}`)
      .then((response) => setShoe(response.data))
      .catch((error) => console.log(error));
  }, [shoeId]);


  return (
    <div>
      <h1>{shoe.name}</h1>
      <img
        src={shoe.img}
        alt={shoe.name}
        style={{ width: '100%', height: '400px', objectFit: 'cover' }}
      />
      <div style={{ padding: '10px' }}>
        <p>{shoe.price}</p>
        <p>{shoe.description}</p>
      </div>
    </div>
  );
}

export default ShoeDetailsPage;
