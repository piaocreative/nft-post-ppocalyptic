/// <reference types="react" />
interface TimelineObserverProps {
    handleObserve?: (observer: (target: Element, callbackFn?: () => void) => void) => JSX.Element;
    initialColor?: string;
    fillColor?: string;
}
declare const TimelineObserver: ({ handleObserve, initialColor, fillColor, }: TimelineObserverProps) => JSX.Element;
export default TimelineObserver;
