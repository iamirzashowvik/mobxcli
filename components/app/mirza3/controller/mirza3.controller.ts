import {
    action,
    computed,
    makeAutoObservable,
    observable,
    runInAction,
  } from "mobx";
  import { Mirza3Service } from "../service/mirza3.service";
  
  export class Mirza3Controller {
    mirza3Service = new Mirza3Service();
    @observable value: number = 12;
    constructor() {
      makeAutoObservable(this);
    }
  
    @computed
    get getValue() {
      // const value = this.mirza3Service.getValue(); //if you want to access the service class
      console.log(this.value);
      return this.value;
    }
  
    @action
    increase() {
      this.value++;
    }
  }
  