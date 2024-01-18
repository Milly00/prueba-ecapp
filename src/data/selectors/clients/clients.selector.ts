import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/global/ngrx/app.state';

export const selectClients = createFeatureSelector<AppState>('clients');
export const selectClient = createFeatureSelector<AppState>('client');

// get All favorites products
export const selectCollectionClients = createSelector(
  selectClients,
  (state: AppState) => state.clients
);

export const selectIdClient = createSelector(
    selectClient,
    (state: AppState) => state.client
  );