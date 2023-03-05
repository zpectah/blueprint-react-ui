import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { FieldLabelProps } from './types';
import { FIELD_LABEL_SCOPE_NAME } from './const';
import getFieldLabelStyles from './styles';

export type UseFieldLabelStylesProps = Pick<FieldLabelProps, 'validationState'> & WithStyleProps;
export type UseFieldLabelStylesReturn = WithRequiredStyleProps;

export const useFieldLabelStyles = ({ style, className, validationState }: UseFieldLabelStylesProps): UseFieldLabelStylesReturn => {
    const { theme } = useThemeContext();

    const FIELD_LABEL_VALIDATION_STATE_CLASSNAME = `${FIELD_LABEL_SCOPE_NAME}--${validationState}`;

    const updatedClassName = classNamesFromList([
        FIELD_LABEL_SCOPE_NAME,
        validationState && FIELD_LABEL_VALIDATION_STATE_CLASSNAME,
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
