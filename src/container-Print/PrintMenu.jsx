import React from 'react';
import PropTypes from 'prop-types';
import pinterest from '../assets/pinterest.svg';

const PrintMenu = ({
  handleQuery, Search,
}) => (
  <section data-testid="menu">
    <header className="header">
      <li className="logo-pinterest">
        <img src={pinterest} alt="logo" className="logo" />

      </li>
      <button
        className="start btn btn-outline-dark"
        type="button"
        // onClick={(event) => {
        //   event.preventDefault();
        //   handleQuery('');
        // }}
      >
        Inicio
      </button>
      <div className="searchImages">
        <form
          data-testid="formSearch"
          onSubmit={(event) => {
            event.preventDefault();
            Search();
          }}
        >
          <input
            className="inputSearch"
            onChange={handleQuery}
            type="text"
            placeholder="Search images"
          />
        </form>
      </div>
    </header>
  </section>
);
PrintMenu.propTypes = {
  handleQuery: PropTypes.func.isRequired,
  Search: PropTypes.func.isRequired,
};

export default PrintMenu;
