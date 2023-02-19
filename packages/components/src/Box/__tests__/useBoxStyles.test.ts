import { renderHook } from '@testing-library/react-hooks';
import { useBoxStyles } from '../useBoxStyles';
import { BOX_SCOPE_NAME } from '../const';

describe('useBoxStyles', () => {

    it('should return style props', () => {
        const { result } = renderHook(() => useBoxStyles({}));

        expect(result.current.style).toBeDefined();
        expect(result.current.className).toBe(BOX_SCOPE_NAME);
    });

});
