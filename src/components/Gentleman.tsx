import React from "react";

interface GentlemanProps {
  name: string;
  avatar: string;
  profession: string;
  status: string;
  twitter?: string;
}

const Gentleman = ({
  name,
  profession,
  status,
  avatar,
  twitter,
}: GentlemanProps) => {
  return (
    <li className="gentleman">
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={avatar}
          alt={`The ${name} pointing at you`}
        />
        <span className="gentleman__initial">{name.charAt(0)}</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>{" "}
            {profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span> {status}
          </li>
          {twitter && (
            <li className="gentleman__data">
              <span className="gentleman__data-label">Twitter:</span> {twitter}
            </li>
          )}
        </ul>
      </div>
      <i className="icon gentleman__icon fas fa-check"></i>
      <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
    </li>
  );
};

export default Gentleman;
