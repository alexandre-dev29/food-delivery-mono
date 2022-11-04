import { Restaurants } from '@food-delivery-mono/data-access';

export const restaurantsStub = (): Restaurants => {
  return {
    idRestaurant: '1',
    restauName: 'Barcelos',
    restauDescription: 'Longue description',
    fileEntityId: '1234',
    createdAt: new Date(2022, 9, 30),
    updatedAt: new Date(2022, 9, 30),
    creationDate: new Date(2022, 9, 30),
  };
};
