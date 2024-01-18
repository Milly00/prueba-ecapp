import { createReducer, on } from '@ngrx/store';
import { collectionClients, idClient } from 'src/domain/actions/clients/clients.actions';

export const initialState: {
  clients: ReadonlyArray<any>;
  client: any
} = { clients: [] , client: {} };

export const clientsReducer = createReducer(
  initialState,
  on(collectionClients, (state, { clients }) => ({
    ...state,
    clients: [...clients],
  })),
);

export const clientReducer = createReducer(
    initialState,
    on(idClient, (state, { client }) => ({
      ...state,
      client: {...client},
    })),
  );