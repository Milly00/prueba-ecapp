import { createReducer, on } from '@ngrx/store';
import { collectionVehicles, idVehicle } from 'src/domain/actions/configurations/vehicles.actions';

export const initialState: {
  vehicles: ReadonlyArray<any>;
  vehicle: any;
} = { vehicles: [], vehicle: {} };

export const vehiclesReducer = createReducer(
  initialState,
  on(collectionVehicles, (state, { vehicles }) => ({
    ...state,
    vehicle: [...vehicles],
  }))
);

export const vehicleReducer = createReducer(
  initialState,
  on(idVehicle, (state, { vehicle }) => ({
    ...state,
    vehicle: { ...vehicle },
  }))
);
