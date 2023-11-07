import { VNode } from 'snabbdom';
declare function Template<tState, tProps>(State: tState, Props: tProps): VNode;
declare function updateState<tState>(State: tState): void;
declare function useEffect(EffectFunction: Function, depend: number): void;
export { Template, updateState, useEffect };
