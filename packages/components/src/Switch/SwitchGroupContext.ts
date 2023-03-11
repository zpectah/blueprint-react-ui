import { createContext, useContext } from 'react';

export interface SwitchGroupContextProps {
    name?: string;
}

const defaultContext: SwitchGroupContextProps = {};

const SwitchGroupContext = createContext<SwitchGroupContextProps>(defaultContext);

export const SwitchGroupContextProvider = SwitchGroupContext.Provider;
export const SwitchGroupContextConsumer = SwitchGroupContext.Consumer;
export const useSwitchGroupContext = (): SwitchGroupContextProps => useContext(SwitchGroupContext);

export default SwitchGroupContext;
