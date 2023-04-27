import React from 'react';
import League from '../../../../interfaces/League';
import PropTypes from 'prop-types';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';
import classes from './style.module.css';

type Prop = {
  league: League,
  nextLeague: () => void,
  previousLeague: () => void,
  isFetching: boolean,
}

function Footer({ league, nextLeague, previousLeague, isFetching }: Prop) {
  return (
    <div className={classes.footer}>
      <AiOutlineCaretLeft className={classes.caret} onClick={ previousLeague } />
      { isFetching ? <p>await...</p> :
        <div className={classes.container}>
          <h2>{league.name.toUpperCase()}</h2>
          <div className={classes.box}>
            { league.logos && <img height='20' src={ league.logos[0].href } /> }
            <h3>{ league.shortName.toUpperCase() }</h3>
          </div>
        </div>
      }
      <AiOutlineCaretRight className={classes.caret} onClick={ nextLeague } />
    </div>
  );
}

Footer.propTypes = {
  league: PropTypes.shape({
    name: PropTypes.string.isRequired,
    shortName: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    logos: PropTypes.arrayOf(PropTypes.shape({
      alt: PropTypes.string.isRequired,
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      href: PropTypes.string.isRequired,
    })),
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
  })
};

export default Footer;