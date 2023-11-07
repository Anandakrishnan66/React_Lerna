import {URL, filenUrlPath} from 'url'
import { createServer } from 'vite'


import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
    h,
  } from "snabbdom";
  
  const patch = init([

    classModule, 
    propsModule, 
    styleModule,
    eventListenersModule, 
  ]);

import { Template,useEffect } from 'uimodule'
const __dirname=filenUrlPath(new URL('.',import.meta.url))
const container=document.getElementById("container")
var state=0
var props="add"
const vNode=Template(state,props)

patch(container,vNode)


(async()=>{
    const server=await createServer({
        configFile:false,
        root:__dirname,
        server:{
            port:1337.
            
        }
    })
    await server.listen()
    server.printUrls()
    
    let state=0
    
    useEffect(()=>{
        newvNode=Template(state)
    
        patch(vNode,newvNode)
    },state)

   
}  





)()





