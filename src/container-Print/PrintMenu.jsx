import React from 'react';
import PropTypes from 'prop-types';
import pinterest from '../assets/pinterest.svg';

const PrintMenu = ({
  GetData, query, handleChange, handleQuery,
}) => (
  <section>
    <header className="header">
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
      {/* <nav className="nav-category">
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
PrintMenu.propTypes = {
  GetData: PropTypes.func.isRequired,
  query: PropTypes.func.isRequired,
  handleQuery: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default PrintMenu;
