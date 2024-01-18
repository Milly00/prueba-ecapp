import { createAction, props } from '@ngrx/store';

export const collectionAssociates = createAction(
  '[Associates]',
  props<{ associates: any[] }>()
);

export const idAssociate = createAction(
    '[Associates]',
    props<{ associate: any }>()
  );