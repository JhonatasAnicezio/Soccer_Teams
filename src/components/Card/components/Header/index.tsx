import React from 'react';
import Country from '../../../../interfaces/Country';
import PropTypes from 'prop-types';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';
import classes from './style.module.css';

type Prop = {
  country: Country,
  nextCountry: () => void,
  previousCountry: () => void,
}

function Header({ country, nextCountry, previousCountry }: Prop) {
  return (
    <div className={classes.header}>
      <AiOutlineCaretLeft className={classes.caret} onClick={ previousCountry } />
      <div className={classes.box}>
        <h1>{ country.name.toUpperCase() }</h1>
      </div>
      <AiOutlineCaretRight className={classes.caret} onClick={ nextCountry } />
    </div>
  );
}

Header.propTypes = {
  country: PropTypes.shape({
    abbreviation: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    leagues: PropTypes.number.isRequired,
  }).isRequired,
  nextCountry: PropTypes.func.isRequired,
  previousCountry: PropTypes.func.isRequired,
};

export default Header;