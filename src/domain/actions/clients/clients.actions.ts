import { createAction, props } from '@ngrx/store';

export const collectionClients = createAction(
  '[Clients]',
  props<{ clients: any[] }>()
);

export const idClient = createAction(
    '[Clients]',
    props<{ client: any }>()
  );