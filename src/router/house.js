import houseCatalog from '@/views/catalogs/HouseCatalog';
import buildHouses from '@/views/Building/BuildHouses';

export default [
  {
    path: '/house/catalog',
    name: 'housecat',
    component: houseCatalog,
  },
  {
    path: '/houses',
    // name : 'houses',
    component: buildHouses,
  },
];
