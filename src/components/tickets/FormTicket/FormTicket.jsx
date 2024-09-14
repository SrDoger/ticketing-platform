import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './formticket.css';

const FormTicket = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [description, setDescription] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Easy');

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      <div className="container-left">
        <h2>New Ticket</h2>

        <div>
          <label>Title</label>
          <input
            required
            {...register('title')}
            placeholder="Title"
            type="text"
          />
          {errors.title && <p style={{ color: 'red' }}>Title is required</p>}
        </div>

        <div>
          <label>Description</label>
          <textarea
            required
            {...register('description')}
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
          />
          {errors.description && <p style={{ color: 'red' }}>Description is required</p>}
        </div>

        <div>
          <div className={`dropdown ${dropdownOpen ? 'select-clicked' : ''}`}>
            <div className="select" onClick={toggleDropdown}>
              <span className="selected">{selectedOption}</span>
              <div className={`caret ${dropdownOpen ? 'caret-rotate' : ''}`}></div>
            </div>
            <ul className={`menu ${dropdownOpen ? 'menu-open' : ''}`}>
              {['Easy', 'Normal', 'Hard'].map(option => (
                <li
                  key={option}
                  className={selectedOption === option ? 'active' : ''}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <input type="submit" value="Enviar" />
        </div>
      </div>
    </form>
  );
};

export default FormTicket;