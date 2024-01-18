import { ActionReducerMap } from "@ngrx/store";
import { associateReducer, associatesReducer } from "src/domain/reducers/associates/associate.reducer";
import { clientReducer, clientsReducer } from "src/domain/reducers/clients/clietns.reducer";
import { areaReducer, areasReducer } from "src/domain/reducers/configurations/delivery-areas.reducer";
import { materialReducer, materialsReducer } from "src/domain/reducers/configurations/materials.reducer";
import { microRoutesReducer } from "src/domain/reducers/configurations/micro-routes.reducer";
import { routeReducer, routesReducer } from "src/domain/reducers/configurations/routes.reducer";
import { vehicleReducer, vehiclesReducer } from "src/domain/reducers/configurations/vehicles.reducer";
import { warehouseReducer, warehousesReducer } from "src/domain/reducers/configurations/warehouses.reducer";

export interface AppState {
    microRoutes: any,
    associates: any,
    associate: any,
    clients: any,
    client: any,
    areas: any,
    area: any,
    materials: any,
    material: any,
    routes: any,
    route: any,
    vehicles: any,
    vehicle: any,
    warehouses: any,
    warehouse: any
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    microRoutes: microRoutesReducer,
    associates: associatesReducer,
    associate: associateReducer,
    clients: clientsReducer,
    client: clientReducer,
    areas: areasReducer,
    area: areaReducer,
    materials: materialsReducer,
    material: materialReducer,
    routes: routesReducer,
    route: routeReducer,
    vehicles: vehiclesReducer,
    vehicle: vehicleReducer,
    warehouses: warehousesReducer,
    warehouse: warehouseReducer
};
