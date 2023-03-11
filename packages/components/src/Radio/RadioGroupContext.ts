import { createContext, useContext } from 'react';

export interface RadioGroupContextProps {
    name?: string;
}

const defaultContext: RadioGroupContextProps = {};

const RadioGroupContext = createContext<RadioGroupContextProps>(defaultContext);

export const RadioGroupContextProvider = RadioGroupContext.Provider;
export const RadioGroupContextConsumer = RadioGroupContext.Consumer;
export const useRadioGroupContext = (): RadioGroupContextProps => useContext(RadioGroupContext);

export default RadioGroupContext;
