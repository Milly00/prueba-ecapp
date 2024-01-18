import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/global/ngrx/app.state';

export const selectVehicles = createFeatureSelector<AppState>('vehicles');
export const selectVehicle = createFeatureSelector<AppState>('vehicle');

// get All favorites products
export const selectCollectionVehicles = createSelector(
  selectVehicles,
  (state: AppState) => state.vehicles
);

export const selectIdVehicle = createSelector(
    selectVehicle,
    (state: AppState) => state.vehicle
  );