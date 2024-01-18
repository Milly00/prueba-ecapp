import { createReducer, on } from '@ngrx/store';
import { collectionWarehouses, idWarehouse } from 'src/domain/actions/configurations/warehouses.actions';

export const initialState: {
  warehouses: ReadonlyArray<any>;
  warehouse: any;
} = { warehouses: [], warehouse: {} };

export const warehousesReducer = createReducer(
  initialState,
  on(collectionWarehouses, (state, { warehouses }) => ({
    ...state,
    warehouses: [...warehouses],
  }))
);

export const warehouseReducer = createReducer(
  initialState,
  on(idWarehouse, (state, { warehouse }) => ({
    ...state,
    warehouse: { ...warehouse },
  }))
);
