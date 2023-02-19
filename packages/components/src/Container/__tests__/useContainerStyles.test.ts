import { renderHook } from '@testing-library/react-hooks';
import { useContainerStyles } from '../useContainerStyles';
import { CONTAINER_SCOPE_NAME, CONTAINER_FLUID_CLASSNAME } from '../const';

describe('useContainerStyles', () => {

    it('should return style props', () => {
        const { result } = renderHook(() => useContainerStyles({}));

        expect(result.current.style).toBeDefined();
        expect(result.current.className).toBe(`${CONTAINER_SCOPE_NAME} ${CONTAINER_FLUID_CLASSNAME}`);
    });

});
