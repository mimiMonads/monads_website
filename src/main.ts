import { ObjectRawResponse } from "https://deno.land/x/endofunctor@v0.0.1.91/optimizer/types.ts"
export default [
    {
        path: "/",
        f: async () => await Deno.readFile("./static/html/main.html")
    },
    {
        path: "/ping",
        f: () => "pong" 
    }
] as ObjectRawResponse[]