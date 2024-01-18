import { createAction, props } from '@ngrx/store';

export const collectionRoutes = createAction(
  '[Routes]',
  props<{ routes: any[] }>()
);

export const idRoute = createAction(
    '[Routes]',
    props<{ route: any }>()
  );