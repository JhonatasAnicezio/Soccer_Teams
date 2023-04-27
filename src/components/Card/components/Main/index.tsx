import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Teams } from '../../../../interfaces/League';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';
import classes from './style.module.css';

type Prop = {
  teams: Teams,
  isFetching: boolean,
};

function Main({ teams, isFetching }: Prop) {
  const [ current, setCurrent ] = useState(0);

  const nextTeam = () => {
    if(current === teams.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const previousTeam = () => {
    if(current === 0) {
      setCurrent(teams.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };
  
  return (
    <div className={ classes.main }>
      <AiOutlineCaretLeft className={ classes.caret } onClick={ previousTeam } />
      { isFetching ? <p>await...</p> :
        <div className={ classes.box }>
          <h1>{ teams[current].team.shortDisplayName.toUpperCase() }</h1>
          {teams[current].team.logos[0] && (
            <img height='150' src={ teams[current].team.logos[0].href } />
          )}
        </div>
      }
      <AiOutlineCaretRight className={ classes.caret } onClick={ nextTeam } />
    </div>
  );
}

Main.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      team: PropTypes.shape({
        shortDisplayName: PropTypes.string.isRequired,
        logos: PropTypes.arrayOf(PropTypes.shape({
          alt: PropTypes.string.isRequired,
          height: PropTypes.number.isRequired,
          width: PropTypes.number.isRequired,
          href: PropTypes.string.isRequired,
        })).isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default Main;