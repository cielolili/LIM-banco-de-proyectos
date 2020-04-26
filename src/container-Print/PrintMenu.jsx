import React from 'react';
import pinterest from '../assets/pinterest.svg';
// import { Link } from 'react-router-dom';
const Menu = ({
  GetData, query, handleChange, handleQuery,
}) => (
  <section>
    <header className="nav-header">
      <li className="logo-pinterest">
        <img src={pinterest} alt="logo" className="logo" />
      </li>

      <button
        className="start btn btn-outline-dark"
        type="button"
        onClick={(event) => {
          event.preventDefault();
          handleQuery('');
        }}
      >
        Inicio
      </button>
      <div className="searchImages">
        <form onSubmit={(event) => {
          event.preventDefault();
          GetData();
        }}
        >
          <input
            type="text"
            placeholder="Buscar imágenes"
            className="inputSearch"
            value={query}
            onChange={handleChange}
          />
        </form>
      </div>
      {/* <nav className="category">
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            handleQuery('Mickey');
          }}

          value="Mickey"
        >
          Mickey
        </button>
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            handleQuery('Books');
          }}

          value="Books"
        >
          Books
        </button>
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            handleQuery('Card');
          }}

          value="Card"
        >
          Card
        </button>
      </nav> */}

    </header>
  </section>
);
export default Menu;
