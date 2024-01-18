export interface MaterialsRecoveryModel {
    warehouseId?: string,
    recoveredBy: string,
    recovererId: string,
    totalWeight: number,
    totalWasteWeight?: number,
    totalValuePaid : number,
    paymentType : string,
    vehicleId?: string,
    recoveryFrom : string,
    recoveryTo: string,
    imageEvidence?: string | any,
    materials?: MaterialRecovery[],
    microRoutes?: any[]
}

export interface MaterialRecovery{
    accountMaterialId: string | number,
    weight: number,
    wasteWeight: number,
    unitPurchasePrice: number,
    valuePaid: number,
    wasteDestinationSiteId: number | string
}

export interface MicroRouteMaterial{
    microRouteId: number,
}
