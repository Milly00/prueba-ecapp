import { createAction, props } from '@ngrx/store';

export const collectionVehicles = createAction(
  '[Vehicles]',
  props<{ vehicles: any[] }>()
);

export const idVehicle = createAction(
    '[Vehicles]',
    props<{ vehicle: any }>()
  );