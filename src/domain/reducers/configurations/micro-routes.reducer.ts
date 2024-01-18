import { createReducer, on } from '@ngrx/store';
import { updateAllMicroRoutes } from 'src/domain/actions/configurations/micro-routes.actions';

export const initialState: {
  microRoutes: ReadonlyArray<any>;
} = { microRoutes: [] };

export const microRoutesReducer = createReducer(
  initialState,
  on(updateAllMicroRoutes, (state, { microRoutes }) => ({
    ...state,
    microRoutes: [...microRoutes],
  }))
);
