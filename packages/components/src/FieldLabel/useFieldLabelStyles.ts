import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps, WithValidationState, getValidationClassName } from '../../../core/src';
import { FIELD_LABEL_SCOPE_NAME, FIELD_LABEL_ROOT_CLASSNAME } from './const';
import { getFieldLabelStyles } from './styles';

export type UseFieldLabelStylesProps = WithValidationState & WithStyleProps;
export type UseFieldLabelStylesReturn = WithRequiredStyleProps;

export const useFieldLabelStyles = ({ style, className, validationState }: UseFieldLabelStylesProps): UseFieldLabelStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        FIELD_LABEL_ROOT_CLASSNAME,
        getValidationClassName(validationState),
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
