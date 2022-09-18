import {capitalizeFirstLetter} from '../service/uppercase'

export function getModel(params:string) :string {
  return  ` import { observable } from "mobx";
 export class ${capitalizeFirstLetter(params)} {
   @observable value: number = 12;
 }`
}
