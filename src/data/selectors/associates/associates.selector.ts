import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/global/ngrx/app.state';

export const selectAssociates = createFeatureSelector<AppState>('associates');
export const selectAssociate = createFeatureSelector<AppState>('associate');

// get All favorites products
export const selectCollectionAssociates = createSelector(
  selectAssociates,
  (state: AppState) => state.associates
);

export const selectIdAssociates = createSelector(
    selectAssociate,
    (state: AppState) => state.associate
  );