export interface ConfigurationMaterialsModel {
    materialId?: number | string;
    code: string;
    name: string;
    description: string;
    purchasePrice: number;
    img?: string;
    status?: string;
}
