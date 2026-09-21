const http=require("http")

const server=http.createServer((req,res)=>{
    if(req.method==="GET" && req.url==="/api"){
        res.writeHead(200,{
            "content-type":"application/json"
        });
        res.end(JSON.stringify({
            message: "APP is Working",
            status:"Success"
        }));
    }
    else{
        res.writeHead(404,{
            "content-type":"application/json"
        });
        res.end(JSON.stringify({
            message: "Bad Request or End point Not Found"
        }));
    }
});

server.listen(3000,()=>{
    console.log('APP is Running on PORT:3000')
});