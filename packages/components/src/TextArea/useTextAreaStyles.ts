import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { TEXT_AREA_SCOPE_NAME, TEXT_AREA_ROOT_CLASSNAME } from './const';
import getTextAreaStyles from './styles';

export type UseTextAreaStylesProps = WithStyleProps;
export type UseTextAreaStylesReturn = WithRequiredStyleProps;

export const useTextAreaStyles = ({ style, className }: UseTextAreaStylesProps): UseTextAreaStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        TEXT_AREA_ROOT_CLASSNAME,
        className,
    ]);

    useUniqueStyles({
        id: TEXT_AREA_SCOPE_NAME,
        styles: getTextAreaStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
