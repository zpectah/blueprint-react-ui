import { renderHook } from '@testing-library/react-hooks';
import { useBlockStyles } from '../useBlockStyles';
import { BLOCK_SCOPE_NAME } from '../const';

describe('useBlockStyles', () => {

    it('should return style props', () => {
        const { result } = renderHook(() => useBlockStyles({}));

        expect(result.current.style).toBeDefined();
        expect(result.current.className).toBe(BLOCK_SCOPE_NAME);
    });

});
