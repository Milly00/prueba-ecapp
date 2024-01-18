import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Analytical',
    iconName: 'aperture',
    route: '/',
  },
  {
    navCap: 'Personal',
  },
  {
    displayName: 'Asociados',
    iconName: 'user-star',
    route: 'associates/associates',
  },
  {
    displayName: 'Colaboradores',
    iconName: 'user-heart',
    route: 'collaborators/collaborator',
  },
  {
    displayName: 'Clientes',
    iconName: 'user-star',
    route: 'clients/clients',
  },
  {
    navCap: 'Configuración',
  },
  
  {
    displayName: 'Areas Prestación de Servicio',
    iconName: 'truck-loading',
    route: 'configurations/delivery-areas',
  },
  {
    displayName: 'Rutas',
    iconName: 'route',
    route: 'configurations/routes',
  },
  {
    displayName: 'Microrutas',
    iconName: 'map-pins',
    route: 'configurations/micro-routes',
  },
  {
    displayName: 'Bodegas',
    iconName: 'box-seam',
    route: 'configurations/warehouses',
  },
  {
    displayName: 'Materiales',
    iconName: 'tools',
    route: 'configurations/materials',
  },
  {
    displayName: 'Vehículos',
    iconName: 'truck-delivery',
    route: 'configurations/vehicles',
  },
  {
    navCap: 'Materiales',
  },
  {
    displayName: 'Recuperación de Materiales',
    iconName: 'transform',
    route: 'materials-recovery/all-materials',
  },
];
