import {capitalizeFirstLetter} from '../service/uppercase'

export function getService(name:string) :string  {
  return `export class ${capitalizeFirstLetter(name)}Service {
    getValue() {
      return 123;
    }
  }
  `
}
