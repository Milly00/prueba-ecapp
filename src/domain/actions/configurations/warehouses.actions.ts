import { createAction, props } from '@ngrx/store';

export const collectionWarehouses = createAction(
  '[Warehouses]',
  props<{ warehouses: any[] }>()
);

export const idWarehouse = createAction(
    '[Warehouse]',
    props<{ warehouse: any }>()
  );