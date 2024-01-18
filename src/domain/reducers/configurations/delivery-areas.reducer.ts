import { createReducer, on } from '@ngrx/store';
import { collectionAreas, idAreas } from 'src/domain/actions/configurations/delivery-areas.actions';

export const initialState: {
  areas: ReadonlyArray<any>;
  area: any
} = { areas: [] , area: {} };

export const areasReducer = createReducer(
  initialState,
  on(collectionAreas, (state, { areas }) => ({
    ...state,
    areas: [...areas],
  })),
);

export const areaReducer = createReducer(
    initialState,
    on(idAreas, (state, { area }) => ({
      ...state,
      area: {...area},
    })),
  );