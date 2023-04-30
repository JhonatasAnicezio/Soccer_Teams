import React from 'react';
import PropTypes from 'prop-types';
import { Teams } from '../../../../interfaces/League';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';
import swordGeneric from '../../../../assets/swordGeneric.png';
import classes from './style.module.css';

type Prop = {
  teams: Teams,
  isFetching: boolean,
  indexTeam: number,
  setIndexTeam: (number: number) => void,
};

function Main({ teams, isFetching, indexTeam, setIndexTeam }: Prop) {
  const nextTeam = () => {
    if(indexTeam === teams.length - 1) {
      setIndexTeam(0);
    } else {
      setIndexTeam(indexTeam + 1);
    }
  };

  const previousTeam = () => {
    if(indexTeam === 0) {
      setIndexTeam(teams.length - 1);
    } else {
      setIndexTeam(indexTeam - 1);
    }
  };
  
  return (
    <div className={ classes.main }>
      <AiOutlineCaretLeft className={ classes.caret } onClick={ previousTeam } />
      { isFetching ? <p>await...</p> :
        <div className={ classes.box }>
          <h1>{ teams[indexTeam].team.shortDisplayName.toUpperCase() }</h1>
          {teams[indexTeam].team.logos[0] ? (
            <img height='150' src={ teams[indexTeam].team.logos[0].href } />
          ) : (
            <img height='150' src={ swordGeneric } />
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
  indexTeam: PropTypes.number.isRequired,
  setIndexTeam: PropTypes.func.isRequired,
};

export default Main;