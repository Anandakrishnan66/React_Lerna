'use strict'
import {VNode,h,init,classModule,
    propsModule,
    styleModule,
    eventListenersModule,
    vnode,} from 'snabbdom'



//  const htmlContent=`
//         <div class="container">
    
//         </div>
    
//        `;

//     const div=document.createElement('div')
//     div.innerHTML=htmlContent;




const patch=init([    classModule,
    propsModule,
    styleModule,
    eventListenersModule,]);

const state={count:0}
const props={label:"ADD"}


const container =document.getElementById("container") as Element


function Template<tState,tProps>(State:tState,Props:tProps):VNode{
    
    var State={...State}
    //  const {state,pr
    console.log(State)

    const vNode=h("div#container.two.classes",[
        h("div#division.two.classes",[
            h('button',{on:{click:()=>{handleClick(state.count)}}},`${props.label}`),
            h('h1',`Count: ${state.count}`)
        ],)
        
    ]);

    return vNode
}
const vNode=Template(state,props)


patch(container,vNode)



function handleClick<tState>(State:tState){
    updateState(state.count+1)

}

function updateState<tState>(State:tState){
    state.count=state.count+1

   const newVnode=Template(state.count,props)
   patch(vNode,newVnode);

    
    
}

let mounted =false

function useEffect(EffectFunction:Function,depend:number){
    if(!mounted){
        EffectFunction();
        mounted=true;

    }
    if(depend){
        EffectFunction()
    }

}

export {Template,updateState,useEffect}
