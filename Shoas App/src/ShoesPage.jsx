import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import ShoeDetailsPage from './Shoe';

function ShoesPage() {
  const [shoes, setShoes] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    img: '',
  });
  const [formVisible, setFormVisible] = useState(false);
  const [selectedShoeId, setSelectedShoeId] = useState(null);

  useEffect(() => {
    axios
      .get('https://63f763fb833c7c9c6082f429.mockapi.io/shoesForSale')
      .then((response) => setShoes(response.data))
      .catch((error) => console.log(error));
  }, []);

  function handleShoeClick(shoeId) {
    setSelectedShoeId(shoeId);
    window.location = `/shoe/${shoeId}`;
  }

  function handleFormChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const newShoe = {
      id: Math.floor(Math.random() * 100000),
      name: formData.name,
      price: formData.price,
      img: formData.img,
    };
    setShoes([...shoes, newShoe]);
    setFormData({
      name: '',
      price: '',
      img: '',
    });
    setFormVisible(false);
  }

  function handleFormCancel() {
    setFormData({
      name: '',
      price: '',
      img: '',
    });
    setFormVisible(false);
  }

  
  const selectedShoe = useMemo(() => {
    if (!selectedShoeId) return null;
    return shoes.find((shoe) => shoe.id === selectedShoeId);
  }, [selectedShoeId, shoes]);

  return (
    <div>
      <h1>Shoes Page</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {shoes.map((shoe) => (
          <div
            key={shoe.id}
            style={{ width: '300px', margin: '20px' }}
            onClick={() => handleShoeClick(shoe.id)}
          >
            <img
              src={shoe.img}
              alt={shoe.name}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '10px' }}>
              <h2>{shoe.name}</h2>
              <p>{shoe.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => setFormVisible(true)}>Add Shoe</button>
      {formVisible && (
        <form onSubmit={handleFormSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
            />
          </label>
          <br />
          <label>
            Price:
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleFormChange}
            />
          </label>
          <br />
          <label>
            Image URL:
            <input
              type="text"
              name="img"
              value={formData.img}
              onChange={handleFormChange}
            />
          </label>
          <br />
          <button type="submit">Add Shoe</button>
          <button type="button" onClick={handleFormCancel}>
            Cancel
          </button>
        </form>
      )}
    </div>
    
    );
  }
  
  export default ShoesPage;