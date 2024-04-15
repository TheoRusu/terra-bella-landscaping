'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const QuoteForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [service, setService] = useState('Sodding'); // Default value is 'Sodding'
  const [description, setDescription] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFail, setIsFail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      service: service,
      name: name,
      email: email,
      phoneNum: phone,
      address: address,
      description: description,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSuccess(true);
        },
        (error) => {
          setIsFail(true);
        }
      );
  };

  return (
    <div className='mt-5 mx-auto text-center w-100'>
      <h4 className='text-decoration-underline mb-4'>Get A Free Quote</h4>
      {isSuccess && (
        <div className='alert alert-success' role='alert'>
          Quote was successfully sent.
        </div>
      )}
      {isFail && (
        <div className='alert alert-danger' role='alert'>
          Try again.
        </div>
      )}

      <div className='form-floating mb-2'>
        <input
          className='form-control'
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Name</label>
      </div>

      <div className='form-floating mb-2'>
        <input
          className='form-control'
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Email</label>
      </div>

      <div className='form-floating mb-2'>
        <input
          className='form-control'
          type='tel'
          placeholder='Phone Number'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label>Phone Number</label>
      </div>

      <div className='form-floating mb-2'>
        <input
          className='form-control'
          placeholder='Address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label>Address</label>
      </div>

      <div className='form-floating mb-2'>
        <select
          className='form-select'
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value='Sodding'>Sodding</option>
          <option value='Interlocking'>Interlocking</option>
          <option value='Planting'>Planting</option>
          <option value='Retaining Wall'>Retaining Wall</option>
          <option value='French Drainage'>French Drainage</option>
          <option value='Decks and Fences'>Decks and Fences</option>
        </select>
        <label>Service</label>
      </div>

      <div className='form-floating mb-2'>
        <textarea
          className='form-control'
          placeholder='Description'
          style={{ height: '200px' }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Description</label>
      </div>
      <button
        style={{ width: '150px' }}
        className='btn btn-dark my-2'
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default QuoteForm;
