import { ObjectRawResponse } from "https://deno.land/x/endofunctor@v0.0.2.0/optimizer/types.ts"


//basic examples
export default [
    {
        path: "/",
        header: ".html",
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
    , {
        path: "/get/:id",
        type: "request",
        signer: {
          seed: "hello",
          size: 16,
          sequence: .5,
        },
        f: (f) =>
          new Response(f.sign(f.param.id), {
            headers: new Headers({
              "Set-Cookie": ("session=" + f.sign(f.param.id) +";SameSite=Strict;Path=/"),
            }),
          }),
      }, {
        path: "/check",
        verifier: {
          seed: "hello",
          size: 16,
          sequence: .5,
        },
        f: (r) =>  (
          c => c !== null
            ? (
              p => p !== -1
                ? r.verify(c.slice(p+8,p+8+17) ) === 1? "hello" : "no-valid"
                : "null"
            )(
              c.indexOf("session=")
            )
            : "null"
        )(
          r.req.headers.get("Cookie")
        )
      },
] as ObjectRawResponse[]