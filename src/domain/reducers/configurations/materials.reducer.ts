import { createReducer, on } from '@ngrx/store';
import {
  collectionMaterials,
  idMaterial,
} from 'src/domain/actions/configurations/materials.actions';

export const initialState: {
  materials: ReadonlyArray<any>;
  material: any;
} = { materials: [], material: {} };

export const materialsReducer = createReducer(
  initialState,
  on(collectionMaterials, (state, { materials }) => ({
    ...state,
    materials: [...materials],
  }))
);

export const materialReducer = createReducer(
  initialState,
  on(idMaterial, (state, { material }) => ({
    ...state,
    material: { ...material },
  }))
);
