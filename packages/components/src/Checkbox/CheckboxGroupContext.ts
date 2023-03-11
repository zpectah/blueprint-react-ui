import { createContext, useContext } from 'react';

export interface CheckboxGroupContextProps {
    name?: string;
}

const defaultContext: CheckboxGroupContextProps = {};

const CheckboxGroupContext = createContext<CheckboxGroupContextProps>(defaultContext);

export const CheckboxGroupContextProvider = CheckboxGroupContext.Provider;
export const CheckboxGroupContextConsumer = CheckboxGroupContext.Consumer;
export const useCheckboxGroupContext = (): CheckboxGroupContextProps => useContext(CheckboxGroupContext);

export default CheckboxGroupContext;
