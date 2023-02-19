import { renderHook } from '@testing-library/react-hooks';
import { useButtonStyles } from '../useButtonStyles';
import {
    BUTTON_SCOPE_NAME,
    BUTTON_LABEL_CLASSNAME,
    BUTTON_PRELOADER_CLASSNAME,
    BUTTON_ICON_CLASSNAME,
    BUTTON_ICON_BEFORE_CLASSNAME,
    BUTTON_ICON_AFTER_CLASSNAME,
    BUTTON_DEFAULT_COLOR,
    BUTTON_DEFAULT_VARIANT,
} from '../const';

describe('useButtonStyles', () => {

    it('should return style props', () => {
        const { result } = renderHook(() => useButtonStyles({}));
        const BUTTON_COLOR_CLASSNAME = `${BUTTON_SCOPE_NAME}--${BUTTON_DEFAULT_COLOR}`;
        const BUTTON_VARIANT_CLASSNAME = `${BUTTON_SCOPE_NAME}--${BUTTON_DEFAULT_VARIANT}`;

        expect(result.current.root.style).toBeDefined();
        expect(result.current.root.className).toBe(`${BUTTON_SCOPE_NAME} ${BUTTON_COLOR_CLASSNAME} ${BUTTON_VARIANT_CLASSNAME}`);
        expect(result.current.label.className).toBe(BUTTON_LABEL_CLASSNAME);
        expect(result.current.preloader.className).toBe(BUTTON_PRELOADER_CLASSNAME);
        expect(result.current.iconBefore.className).toBe(`${BUTTON_ICON_CLASSNAME} ${BUTTON_ICON_BEFORE_CLASSNAME}`);
        expect(result.current.iconAfter.className).toBe(`${BUTTON_ICON_CLASSNAME} ${BUTTON_ICON_AFTER_CLASSNAME}`);
    });

});
