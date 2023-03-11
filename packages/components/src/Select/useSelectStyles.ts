import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps, STATE_CLASSNAME_PREFIX } from '../../../core/src';
import { SelectBaseProps } from './types';
import { SELECT_SCOPE_NAME, SELECT_ROOT_CLASSNAME } from './const';
import { getSelectStyles } from './styles';

export type UseSelectStylesProps = Pick<SelectBaseProps, 'validationState'> & WithStyleProps;
export type UseSelectStylesReturn = WithRequiredStyleProps;

export const useSelectStyles = ({ style, className, validationState }: UseSelectStylesProps): UseSelectStylesReturn => {
    const { theme } = useThemeContext();

    const VALIDATION_STATE_CLASSNAME = validationState ? `${STATE_CLASSNAME_PREFIX}${validationState}` : '';

    const updatedClassName = classNamesFromList([
        SELECT_ROOT_CLASSNAME,
        validationState && VALIDATION_STATE_CLASSNAME,
        className,
    ]);

    useUniqueStyles({
        id: SELECT_SCOPE_NAME,
        styles: getSelectStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
