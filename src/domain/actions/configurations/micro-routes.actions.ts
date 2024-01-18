import { createAction, props } from '@ngrx/store';



export const updateAllMicroRoutes = createAction(
  '[MicroRoutes] Add To MicroRoutes',
  props<{ microRoutes: any[] }>()
);
