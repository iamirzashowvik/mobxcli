import {capitalizeFirstLetter} from '../service/uppercase'

export function getView(name:string) :string  {
  return `import { inject, observer } from "mobx-react";
  import react from "react";
  import { ${capitalizeFirstLetter(name)}Controller } from "../controller/${name}.controller";
  
  interface State {
    userName: string;
  }
  
  type Props = {
    ${name}Controller?: ${capitalizeFirstLetter(name)}Controller;
  };
  
  @inject("${name}Controller")
  @observer
  export class ${capitalizeFirstLetter(name)}View extends react.Component<Props> {
    render() {
      const { ${name}Controller } = this.props;
      const buttonHandler = (event: any) => {
        event.preventDefault();
        if (${name}Controller) ${name}Controller.increase();
      };
      if (${name}Controller) {
        return (
          <div>
            {${name}Controller.getValue}
            <div
              onClick={buttonHandler}
              className="hover:text-green-600 text-red-600"
            >
              hello
            </div>
          </div>
        );
      }
      return <div>Loading...</div>;
    }
  }
  
  `
}
