import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/global/ngrx/app.state';

export const selectAreas = createFeatureSelector<AppState>('areas');
export const selectArea= createFeatureSelector<AppState>('area');

// get All favorites products
export const selectCollectionAreas = createSelector(
  selectAreas,
  (state: AppState) => state.areas
);

export const selectIdArea = createSelector(
    selectArea,
    (state: AppState) => state.area
  );