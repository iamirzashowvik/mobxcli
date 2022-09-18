import {capitalizeFirstLetter} from '../service/uppercase'

export function getController(name:string) :string  {
  return `import {
    action,
    computed,
    makeAutoObservable,
    observable,
    runInAction,
  } from "mobx";
  import { ${capitalizeFirstLetter(name)}Service } from "../service/${name}.service";
  
  export class ${capitalizeFirstLetter(name)}Controller {
    ${name}Service = new ${capitalizeFirstLetter(name)}Service();
    @observable value: number = 12;
    constructor() {
      makeAutoObservable(this);
    }
  
    @computed
    get getValue() {
      // const value = this.${name}Service.getValue(); //if you want to access the service class
      console.log(this.value);
      return this.value;
    }
  
    @action
    increase() {
      this.value++;
    }
  }
  `
}
