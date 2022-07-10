const productList = [
  {
    id: 1,
    name: 'Flor de Vidrio',
    price: '12000',
    disc: '',
    image: '../public/images/PRD-AlzadaFlor.png',
    descs: 'Alzada con pie en forma de flor.',
    descl:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, erat sit amet ullamcorper auctor, sem lorem ornare mauris, nec lacinia sem sapien ut diam. Quisque quis mauris quis dui tristique semper. Donec a quam suscipit, maximus dolor quis, porttitor nibh. Sed magna mauris, viverra quis placerat at, hendrerit in augue. Praesent nec molestie odio. Vivamus nec est eget velit iaculis dignissim nec vel ante. Suspendisse metus nisi, convallis sed cursus at, mattis in ipsum. Maecenas pretium auctor ultricies. Sed hendrerit orci et eros tristique interdum. Vestibulum sollicitudin eu velit scelerisque mollis. Curabitur eu blandit ante. Proin et nisl sit amet ex cursus iaculis eu ut nisi.',
  },
  {
    id: 2,
    name: 'Canasto de Vidrio',
    price: '9000',
    disc: '15',
    image: '../public/images/PRD-CanastoFlor.webp',
    descs: 'Canasto de flores tallado en vidrio.',
    descl:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, erat sit amet ullamcorper auctor, sem lorem ornare mauris, nec lacinia sem sapien ut diam. Quisque quis mauris quis dui tristique semper. Donec a quam suscipit, maximus dolor quis, porttitor nibh. Sed magna mauris, viverra quis placerat at, hendrerit in augue. Praesent nec molestie odio. Vivamus nec est eget velit iaculis dignissim nec vel ante. Suspendisse metus nisi, convallis sed cursus at, mattis in ipsum. Maecenas pretium auctor ultricies. Sed hendrerit orci et eros tristique interdum. Vestibulum sollicitudin eu velit scelerisque mollis. Curabitur eu blandit ante. Proin et nisl sit amet ex cursus iaculis eu ut nisi.',
  },
  {
    id: 3,
    name: 'Carruaje Navideño',
    price: '15000',
    disc: '10',
    image: '../public/images/PRD-Carruaje.jpg',
    descs: 'Figura de cristal hecha a mano en forma de carruaje navideño.',
    descl:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, erat sit amet ullamcorper auctor, sem lorem ornare mauris, nec lacinia sem sapien ut diam. Quisque quis mauris quis dui tristique semper. Donec a quam suscipit, maximus dolor quis, porttitor nibh. Sed magna mauris, viverra quis placerat at, hendrerit in augue. Praesent nec molestie odio. Vivamus nec est eget velit iaculis dignissim nec vel ante. Suspendisse metus nisi, convallis sed cursus at, mattis in ipsum. Maecenas pretium auctor ultricies. Sed hendrerit orci et eros tristique interdum. Vestibulum sollicitudin eu velit scelerisque mollis. Curabitur eu blandit ante. Proin et nisl sit amet ex cursus iaculis eu ut nisi.',
  },
  {
    id: 4,
    name: 'Estatua de Pajaros',
    price: '15000',
    disc: '10',
    image: '../public/images/PRD-Pajaros.jpg',
    descs: 'Figura de cristal hecha a mano en forma de pajaros.',
    descl:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, erat sit amet ullamcorper auctor, sem lorem ornare mauris, nec lacinia sem sapien ut diam. Quisque quis mauris quis dui tristique semper. Donec a quam suscipit, maximus dolor quis, porttitor nibh. Sed magna mauris, viverra quis placerat at, hendrerit in augue. Praesent nec molestie odio. Vivamus nec est eget velit iaculis dignissim nec vel ante. Suspendisse metus nisi, convallis sed cursus at, mattis in ipsum. Maecenas pretium auctor ultricies. Sed hendrerit orci et eros tristique interdum. Vestibulum sollicitudin eu velit scelerisque mollis. Curabitur eu blandit ante. Proin et nisl sit amet ex cursus iaculis eu ut nisi.',
  },
  {
    id: 5,
    name: 'Platos Hondos',
    price: '5500',
    disc: '10',
    image: '../public/images/PRD-PlatosHondos.jpg',
    descs: 'Platos hondos tallados x 6 unidades.',
    descl:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, erat sit amet ullamcorper auctor, sem lorem ornare mauris, nec lacinia sem sapien ut diam. Quisque quis mauris quis dui tristique semper. Donec a quam suscipit, maximus dolor quis, porttitor nibh. Sed magna mauris, viverra quis placerat at, hendrerit in augue. Praesent nec molestie odio. Vivamus nec est eget velit iaculis dignissim nec vel ante. Suspendisse metus nisi, convallis sed cursus at, mattis in ipsum. Maecenas pretium auctor ultricies. Sed hendrerit orci et eros tristique interdum. Vestibulum sollicitudin eu velit scelerisque mollis. Curabitur eu blandit ante. Proin et nisl sit amet ex cursus iaculis eu ut nisi.',
  },
  {
    id: 6,
    name: 'Platos playos',
    price: '5550',
    disc: '10',
    image: '../public/images/PRD-PlatosPlayos.webp',
    descs: 'Platos playos tallados x 6 unidades.',
    descl:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, erat sit amet ullamcorper auctor, sem lorem ornare mauris, nec lacinia sem sapien ut diam. Quisque quis mauris quis dui tristique semper. Donec a quam suscipit, maximus dolor quis, porttitor nibh. Sed magna mauris, viverra quis placerat at, hendrerit in augue. Praesent nec molestie odio. Vivamus nec est eget velit iaculis dignissim nec vel ante. Suspendisse metus nisi, convallis sed cursus at, mattis in ipsum. Maecenas pretium auctor ultricies. Sed hendrerit orci et eros tristique interdum. Vestibulum sollicitudin eu velit scelerisque mollis. Curabitur eu blandit ante. Proin et nisl sit amet ex cursus iaculis eu ut nisi.',
  },
  {
    id: 7,
    name: 'Tortera Tallada',
    price: '3000',
    disc: '10',
    image: '../public/images/PRD-TorteraTallada.webp',
    descs: 'Tortera tallada.',
    descl:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, erat sit amet ullamcorper auctor, sem lorem ornare mauris, nec lacinia sem sapien ut diam. Quisque quis mauris quis dui tristique semper. Donec a quam suscipit, maximus dolor quis, porttitor nibh. Sed magna mauris, viverra quis placerat at, hendrerit in augue. Praesent nec molestie odio. Vivamus nec est eget velit iaculis dignissim nec vel ante. Suspendisse metus nisi, convallis sed cursus at, mattis in ipsum. Maecenas pretium auctor ultricies. Sed hendrerit orci et eros tristique interdum. Vestibulum sollicitudin eu velit scelerisque mollis. Curabitur eu blandit ante. Proin et nisl sit amet ex cursus iaculis eu ut nisi.',
  },
  {
    id: 8,
    name: 'Frutera Tallada',
    price: '3500',
    disc: '10',
    image: '../public/images/PRD-FruteraTallada.webp',
    descs: 'Frutera tallada.',
    descl:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, erat sit amet ullamcorper auctor, sem lorem ornare mauris, nec lacinia sem sapien ut diam. Quisque quis mauris quis dui tristique semper. Donec a quam suscipit, maximus dolor quis, porttitor nibh. Sed magna mauris, viverra quis placerat at, hendrerit in augue. Praesent nec molestie odio. Vivamus nec est eget velit iaculis dignissim nec vel ante. Suspendisse metus nisi, convallis sed cursus at, mattis in ipsum. Maecenas pretium auctor ultricies. Sed hendrerit orci et eros tristique interdum. Vestibulum sollicitudin eu velit scelerisque mollis. Curabitur eu blandit ante. Proin et nisl sit amet ex cursus iaculis eu ut nisi.',
  },
];

module.exports = productList;

/* TEMPLATE:

const products = {
    "name": ABC,
    "price": ABC,
    "disc": ABC,
    "desc": ABC,
    "image": ABC,
    }
    */
