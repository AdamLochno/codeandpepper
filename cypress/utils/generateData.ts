import { faker } from "@faker-js/faker";

export const generateFirstName = () => {
  const firstName = faker.name.firstName();
  return firstName;
};

export const generateLastName = () => {
  const lastName = faker.name.lastName();
  return lastName;
};

export const generateZipCode = () => {
  const zipCode = faker.address.zipCode();
  return zipCode;
};
