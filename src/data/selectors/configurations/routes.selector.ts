import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/global/ngrx/app.state';

export const selectRoutes = createFeatureSelector<AppState>('routes');
export const selectRoute = createFeatureSelector<AppState>('route');

// get All favorites products
export const selectCollectionRoutes = createSelector(
  selectRoutes,
  (state: AppState) => state.routes
);

export const selectIdRoute = createSelector(
    selectRoute,
    (state: AppState) => state.route
  );