import { faker } from "@faker-js/faker";

export const generateFirstName = () => {
  return faker.name.firstName();
};

export const generateLastName = () => {
  return faker.name.lastName();
};

export const generateZipCode = () => {
  return faker.address.zipCode();
};
