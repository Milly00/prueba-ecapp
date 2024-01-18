import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameColumnTable',
  standalone: true
})
export class NameColumnTablePipe implements PipeTransform {

  names = {
    code: "Código",
    name: "Nombre",
    surname: 'Apellidos',
    operationStartDate: 'F. de Inicio de Operación',
    cityId: 'Ciudad',
    action: 'Acción',
    areaId: 'Cód. Area',
    nuap: 'NUAP',
    numMacro: 'Cód. Ruta',
    macroRouteId: 'Cód. Ruta',
    microRouteType: 'Tipo de Microruta',
    warehouseType: 'Tipo de Bodega',
    vehicleType: 'Tipo de Vehículo',
    plate: 'Placa',
    capacity: 'Capacidad',
    ACTIVE: 'Activo',
    INACTIVE: 'Inactivo',
    ALL: 'Todos',
    ECA: 'ECA',
    PA: 'PA',
    recoveredBy: 'Recuperado Por',
    totalWeight: 'Peso Total',
    totalValuePaid: 'Total Pagado',
    paymentType: 'Forma de Pago',
    recoveryFrom: 'Recuperación Desde',
    recoveryTo: 'Recuperación Hasta',
    weight: 'Peso',
    wasteWeight: 'KG de Desecho',
    unitPurchasePrice: 'Precio por KG',
    valuePaid: 'Total'
  }

  transform(value: string): unknown {
    return this.names[value as keyof typeof this.names];
  }

}
