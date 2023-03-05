import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { RADIO_ELEMENT_CLASSNAME } from './const';
import { getRadioElementStyles } from './styles';

export type UseRadioElementStylesProps = WithStyleProps;
export type UseRadioElementStylesReturn = WithRequiredStyleProps;

export const useRadioElementStyles = ({ style, className }: UseRadioElementStylesProps): UseRadioElementStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        RADIO_ELEMENT_CLASSNAME,
        className,
    ]);

    useUniqueStyles({
        id: RADIO_ELEMENT_CLASSNAME,
        styles: getRadioElementStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
