import { inject, observer } from "mobx-react";
  import react from "react";
  import { Mirza3Controller } from "../controller/mirza3.controller";
  
  interface State {
    userName: string;
  }
  
  type Props = {
    mirza3Controller?: Mirza3Controller;
  };
  
  @inject("mirza3Controller")
  @observer
  export class Mirza3View extends react.Component<Props> {
    render() {
      const { mirza3Controller } = this.props;
      const buttonHandler = (event: any) => {
        event.preventDefault();
        if (mirza3Controller) mirza3Controller.increase();
      };
      if (mirza3Controller) {
        return (
          <div>
            {mirza3Controller.getValue}
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
  
  