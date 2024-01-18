import { createReducer, on } from '@ngrx/store';
import { collectionAssociates, idAssociate } from 'src/domain/actions/associates/associates.actions';

export const initialState: {
  associates: ReadonlyArray<any>;
  associate: any
} = { associates: [] , associate: {} };

export const associatesReducer = createReducer(
  initialState,
  on(collectionAssociates, (state, { associates }) => ({
    ...state,
    associates: [...associates],
  })),
);

export const associateReducer = createReducer(
    initialState,
    on(idAssociate, (state, { associate }) => ({
      ...state,
      associate: {...associate},
    })),
  );