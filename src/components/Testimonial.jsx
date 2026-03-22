import React from 'react';

const Testimonial = ({ name, company, testimonial, avatar }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-content">
        <p>"{testimonial}"</p>
      </div>
      <div className="testimonial-author">
        <img src={avatar} alt={name} />
        <div>
          <h4>{name}</h4>
          <span>{company}</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;