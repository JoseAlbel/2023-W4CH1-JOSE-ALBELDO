import { getMockData } from "../data/mock.data";
import { GentlemanData } from "../types/mock.type";

export function Gentleman() {
  const mockData: GentlemanData[] = getMockData();
  const gentleman = ({
    id,
    name,
    status,
    profession,
    twitter,
    picture,
    alternativeText,
  }: GentlemanData) => (
    <li key={id} className="gentleman">
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={picture}
          alt={alternativeText}
        />
        <span className="gentleman__initial">
          {name.charAt(0).toUpperCase()}
        </span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            {profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span> {status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span>
            {twitter}
          </li>
        </ul>
      </div>
      <i className="icon gentleman__icon fas fa-check"></i>
      <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
    </li>
  );

  return (
    <main className="main">
      <ul className="gentlemen">{mockData.map(gentleman)}</ul>
    </main>
  );
}
