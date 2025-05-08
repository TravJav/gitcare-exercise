import {
    uniqueNamesGenerator,
    adjectives,
    animals,
  } from 'unique-names-generator';

  export class ProductNameGenerator {
    generateRandomProductName(): string {
      const randomProductName: string = uniqueNamesGenerator({
        dictionaries: [adjectives, animals],
        length: 2,
        style: 'capital',
        separator: ' ',
      });
      return randomProductName;
    }

    generateMultipleProductNames(quantity: number): string[] {
      const productNames: string[] = [];
      for (let i = 0; i < quantity; i++) {
        productNames.push(this.generateRandomProductName());
      }
      return productNames;
    }
  }
