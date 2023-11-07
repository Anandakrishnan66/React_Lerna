'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEffect = exports.updateState = exports.Template = void 0;
const snabbdom_1 = require("snabbdom");
const patch = (0, snabbdom_1.init)([snabbdom_1.classModule,
    snabbdom_1.propsModule,
    snabbdom_1.styleModule,
    snabbdom_1.eventListenersModule,]);
const state = { count: 0 };
const props = { label: "ADD" };
const container = document.getElementById("container");
function Template(State, Props) {
    var State = Object.assign({}, State);
    console.log(State);
    const vNode = (0, snabbdom_1.h)("div#container.two.classes", [
        (0, snabbdom_1.h)("div#division.two.classes", [
            (0, snabbdom_1.h)('button', { on: { click: () => { handleClick(state.count); } } }, `${props.label}`),
            (0, snabbdom_1.h)('h1', `Count: ${state.count}`)
        ])
    ]);
    return vNode;
}
exports.Template = Template;
const vNode = Template(state, props);
patch(container, vNode);
function handleClick(State) {
    updateState(state.count + 1);
}
function updateState(State) {
    state.count = state.count + 1;
    const newVnode = Template(state.count, props);
    patch(vNode, newVnode);
}
exports.updateState = updateState;
let mounted = false;
function useEffect(EffectFunction, depend) {
    if (!mounted) {
        EffectFunction();
        mounted = true;
    }
    if (depend) {
        EffectFunction();
    }
}
exports.useEffect = useEffect;
//# sourceMappingURL=uimodule.js.map