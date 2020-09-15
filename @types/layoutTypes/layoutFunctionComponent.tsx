import { FunctionComponent } from 'react';


type LayoutFunctionComponent<P = {}> = FunctionComponent<P> & {
  Layout: any //whatever type it actually is
}

export default LayoutFunctionComponent;