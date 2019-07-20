import * as actionTypes from './actionTypes';
import api from '../../../../utils/api';

export const getVeterans = () => ({
  type: actionTypes.GET_VETERANS,
  payload: api.get('/veterans'),
});

export const setCurrentVeteran = veteran => ({
  type: actionTypes.SET_CURRENT_VETERAN,
  payload: veteran,
});
