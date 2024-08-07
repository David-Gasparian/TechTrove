import React, {
    memo, ReactNode, useContext, useEffect, useMemo, useRef, useState,
} from 'react';

type Spring = typeof import('@react-spring/web');
type Gesture = typeof import('@use-gesture/react');

interface AnimationContextPayload {
    Spring?: Spring;
    Gesture?: Gesture;
    isLoaded?: boolean;
}

export const AnimationContext = React.createContext<AnimationContextPayload>({});

const getAnimationLibs = async () => Promise.all([
    import('@react-spring/web'),
    import('@use-gesture/react'),
]);

export const useAnimationLibs = () => useContext(AnimationContext) as Required<AnimationContextPayload>;

interface AnimationProviderProps {
    children: ReactNode;
}

export const AnimationProvider = memo((props: AnimationProviderProps) => {
    const {
        children,
    } = props;

    const springRef = useRef<Spring>();
    const gestureRef = useRef<Gesture>();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getAnimationLibs().then(([Spring, Gesture]) => {
            springRef.current = Spring;
            gestureRef.current = Gesture;
            setIsLoaded(true);
        });
    }, []);

    const value = useMemo(() => ({
        Spring: springRef.current,
        Gesture: gestureRef.current,
        isLoaded,
    }), [isLoaded]);

    return (
        <AnimationContext.Provider value={value}>
            {children}
        </AnimationContext.Provider>
    );
});
