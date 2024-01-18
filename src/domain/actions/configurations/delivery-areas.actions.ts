import { createAction, props } from '@ngrx/store';

export const collectionAreas = createAction(
  '[Delivery Areas]',
  props<{ areas: any[] }>()
);

export const idAreas = createAction(
    '[Delivery Areas]',
    props<{ area: any }>()
  );