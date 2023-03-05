import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { RADIO_SCOPE_NAME, RADIO_ROOT_CLASSNAME, RADIO_LABEL_CLASSNAME } from './const';
import { getRadioStyles } from './styles';

export type UseRadioStylesProps = WithStyleProps;
export type UseRadioStylesReturn = {
    root: WithRequiredStyleProps;
    label: {
        className: WithRequiredStyleProps['className'];
    };
};

export const useRadioStyles = ({ style, className }: UseRadioStylesProps): UseRadioStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        RADIO_ROOT_CLASSNAME,
        className,
    ]);

    useUniqueStyles({
        id: RADIO_SCOPE_NAME,
        styles: getRadioStyles(theme),
    });

    return {
        root: {
            style: { ...style },
            className: updatedClassName,
        },
        label: {
            className: RADIO_LABEL_CLASSNAME,
        },
    };
};
