import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/global/ngrx/app.state';

export const selectMaterials = createFeatureSelector<AppState>('materials');
export const selectMaterial = createFeatureSelector<AppState>('material');

// get All favorites products
export const selectCollectionMaterials = createSelector(
  selectMaterials,
  (state: AppState) => state.materials
);

export const selectIdMaterial = createSelector(
    selectMaterial,
    (state: AppState) => state.material
  );