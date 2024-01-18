import { createReducer, on } from '@ngrx/store';
import { collectionRoutes, idRoute } from 'src/domain/actions/configurations/routes.actions';

export const initialState: {
  routes: ReadonlyArray<any>;
  route: any;
} = { routes: [], route: {} };

export const routesReducer = createReducer(
  initialState,
  on(collectionRoutes, (state, { routes }) => ({
    ...state,
    routes: [...routes],
  }))
);

export const routeReducer = createReducer(
  initialState,
  on(idRoute, (state, { route }) => ({
    ...state,
    route: { ...route },
  }))
);
