import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/global/ngrx/app.state';

export const selectAppState = createFeatureSelector<AppState>('microRoutes');
// get All favorites products
export const selectMicroRoutes = createSelector(
  selectAppState,
  (state: AppState) => state.microRoutes
);
