import fun from "https://deno.land/x/endofunctor@v0.0.1.91/fun.ts";
 import { serve } from "https://deno.land/std@0.165.0/http/server.ts";
 import main from "./src/main.ts"

 
await serve(
  fun()([
    ... main,
    {
     type: "static",
     name: "/s/",
     path: "./static/"
    }
  ]),
  { port: 8080 },
);