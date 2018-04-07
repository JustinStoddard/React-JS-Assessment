import { BEERS } from '../actions/beers';

const beers = (state = [], action) => {
  switch(action.type) {
    case BEERS:
      return action.beers
    //Next case Goes here.
    default:
      return state;
  }
}