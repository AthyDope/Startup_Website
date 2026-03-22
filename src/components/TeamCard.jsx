import React from 'react';

const TeamCard = ({ name, position, bio, image, social }) => {
  return (
    <div className="team-card">
      <div className="team-image">
        <img src={image} alt={name} />
      </div>
      <div className="team-content">
        <h3>{name}</h3>
        <h4>{position}</h4>
        <p>{bio}</p>
        <div className="team-social">
          {social && social.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;