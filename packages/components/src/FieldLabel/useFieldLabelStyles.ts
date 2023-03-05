import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { FIELD_LABEL_SCOPE_NAME } from './const';
import getFieldLabelStyles from './styles';

export type UseFieldLabelStylesProps = WithStyleProps;
export type UseFieldLabelStylesReturn = WithRequiredStyleProps;

export const useFieldLabelStyles = ({ style, className }: UseFieldLabelStylesProps): UseFieldLabelStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        FIELD_LABEL_SCOPE_NAME,
        className,
    ]);

    useUniqueStyles({
        id: FIELD_LABEL_SCOPE_NAME,
        styles: getFieldLabelStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
