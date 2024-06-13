// src/Services.js
import React from 'react';
import { FaPlane, FaHotel, FaCar, FaUmbrellaBeach, FaPassport, FaLifeRing, FaConciergeBell, FaSuitcase } from 'react-icons/fa';

const services = [
  { name: 'Travel Consultation and Planning', icon: <FaSuitcase /> },
  { name: 'Flight Bookings', icon: <FaPlane /> },
  { name: 'Accommodation Reservations', icon: <FaHotel /> },
  { name: 'Transportation Arrangements', icon: <FaCar /> },
  { name: 'Tour Packages', icon: <FaUmbrellaBeach /> },
  { name: 'Travel Insurance', icon: <FaLifeRing /> },
  { name: 'Visa and Documentation Assistance', icon: <FaPassport /> },
  { name: '24/7 Customer Support', icon: <FaConciergeBell /> },
];

const Services = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Our Services</h1>
      <div style={styles.servicesList}>
        {services.map((service, index) => (
          <div key={index} style={styles.serviceItem}>
            <div style={styles.icon}>{service.icon}</div>
            <div style={styles.serviceName}>{service.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  servicesList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  serviceItem: {
    width: '200px',
    margin: '10px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    textAlign: 'center',
    backgroundColor: 'red',
  },
  icon: {
    fontSize: '40px',
    marginBottom: '10px',
    color:'white'
  },
  serviceName: {
    fontSize: '18px',
    color:'white'
  },
};

export default Services;
