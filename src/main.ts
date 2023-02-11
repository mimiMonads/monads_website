import { ObjectRawResponse } from "https://deno.land/x/endofunctor@v0.0.1.91/optimizer/types.ts"

//basic examples
export default [
    {
        path: "/",
        f: async () => await Deno.readFile("./static/html/main.html")
    },
    {   
        query:{
            only: ["name"]
        },
        path: "/hello",
        f:  f => "hello " + f.query?.name
    },
    {
        path: "/hello/:name",
        f:  f => "hello " + f.param.name
    },    
    {
        path: "/ping",
        f: () => "pong" 
    }
] as ObjectRawResponse[]