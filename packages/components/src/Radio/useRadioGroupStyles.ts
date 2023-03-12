import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps, WithValidationState, getValidationClassName } from '../../../core/src';
import {
    RADIO_GROUP_SCOPE_NAME,
    RADIO_GROUP_CLASSNAME,
    RADIO_GROUP_LEGEND_CLASSNAME,
    RADIO_GROUP_BODY_CLASSNAME,
} from './const';
import { getRadioGroupStyles } from './styles';

export type UseRadioGroupStylesProps = WithValidationState & WithStyleProps;
export type UseRadioGroupStylesReturn = {
    root: WithRequiredStyleProps;
    legend: {
        className: WithRequiredStyleProps['className'];
    };
    body: {
        className: WithRequiredStyleProps['className'];
    };
};

export const useRadioGroupStyles = ({ style, className, validationState }: UseRadioGroupStylesProps): UseRadioGroupStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        RADIO_GROUP_CLASSNAME,
        getValidationClassName(validationState),
        className,
    ]);

    useUniqueStyles({
        id: RADIO_GROUP_SCOPE_NAME,
        styles: getRadioGroupStyles(theme),
    });

    return {
        root: {
            style: { ...style },
            className: updatedClassName,
        },
        legend: {
            className: RADIO_GROUP_LEGEND_CLASSNAME,
        },
        body: {
            className: RADIO_GROUP_BODY_CLASSNAME,
        },
    };
};
