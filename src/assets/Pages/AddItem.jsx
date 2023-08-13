import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddItem = ({ children }) => {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('Kilogram');

  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const getCurrentFormattedDate = () => {
        const currentDate = new Date();
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = currentDate.getFullYear();
        return `${day}/${month}/${year}`;
      };

    // Create a new item object with the form input values and current date
    const newItem = {
        name: itemName,
        quantity: quantity,
        unit: unit,
        date: getCurrentFormattedDate(),
      };

    try {
      // Get existing items from local storage
      const existingItemsJson = localStorage.getItem('items');
      const existingItems = existingItemsJson ? JSON.parse(existingItemsJson) : [];

      // Add the new item to the existing items array
      existingItems.push(newItem);

      // Save the updated items array to local storage
      localStorage.setItem('items', JSON.stringify(existingItems));

      // Clear the input fields
      setItemName('');
      setQuantity('');
      setUnit('Kilogram');
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your item has been saved',
        showConfirmButton: false,
        timer: 3000
      })
      navigate('/')
    } catch (error) {
      console.error('Error saving item to local storage:', error);
    }
  };

  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          {children}
          <form onSubmit={handleSubmit}>
            <div className="form-floating my-5">
              <input
                type="text"
                className="form-control"
                id="floatingName"
                placeholder=""
                value={itemName}
                onChange={handleNameChange}
              />
              <label htmlFor="floatingName">Item Name</label>
            </div>
            <div className="form-floating mb-5">
              <input
                type="number"
                className="form-control"
                id="floatingQuantity"
                placeholder=""
                value={quantity}
                onChange={handleQuantityChange}
              />
              <label htmlFor="floatingQuantity">Quantity</label>
            </div>
            <select
              className="form-select form-select-lg mb-5"
              id="unitInput"
              value={unit}
              onChange={handleUnitChange}
            >
              <option value="Kilogram">Kilogram</option>
              <option value="Dozen">Dozen</option>
            </select>
            <div className="d-grid mx-auto mb-4">
              <button type="submit" className="btn btn-primary">
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;