import { createAction, props } from '@ngrx/store';

export const collectionMaterials = createAction(
  '[Materials]',
  props<{ materials: any[] }>()
);

export const idMaterial = createAction(
    '[Materials]',
    props<{ material: any }>()
  );