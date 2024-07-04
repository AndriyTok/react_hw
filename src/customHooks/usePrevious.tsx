import { useRef, useEffect } from 'react';

const usePrevious = (value: any): any => {
    const ref = useRef<any>(undefined);

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
};

export default usePrevious;
