import { renderHook } from '@testing-library/react-hooks';
import { useBadgeStyles } from '../useBadgeStyles';
import { BADGE_ROOT_CLASSNAME, BADGE_LABEL_CLASSNAME, BADGE_ICON_CLASSNAME, BADGE_ICON_START_CLASSNAME, BADGE_ICON_END_CLASSNAME } from '../const';

describe('useBadgeStyles', () => {

    it('should return style props', () => {
        const { result } = renderHook(() => useBadgeStyles({}));

        expect(result.current.root.style).toBeDefined();
        expect(result.current.root.className).toBe(BADGE_ROOT_CLASSNAME);
        expect(result.current.label.className).toBe(BADGE_LABEL_CLASSNAME);
        expect(result.current.iconStart.className).toBe(`${BADGE_ICON_CLASSNAME} ${BADGE_ICON_START_CLASSNAME}`);
        expect(result.current.iconEnd.className).toBe(`${BADGE_ICON_CLASSNAME} ${BADGE_ICON_END_CLASSNAME}`);
    });

});
