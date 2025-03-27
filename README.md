# reproduction-fastify-autoload-hook-issue
This is a reproduction repo to show the issues with autohooks and dirNameRoutePrefix

## Test

### Global false value (Issue)
`npm start:global`

curl http://localhost:3001/first
curl http://localhost:3001/second
curl http://localhost:3001/third
curl http://localhost:3001/fourth
curl http://localhost:3001/global

### Conditional Prefixing (Issue)
`npm start:conditional`

curl http://localhost:3002/first
curl http://localhost:3002/second
curl http://localhost:3002/yellow-submarine/third
curl http://localhost:3002/fourth
curl http://localhost:3002/global

### More Granular Control (Partial Issue)
`npm start:granular`

curl http://localhost:3003/first
curl http://localhost:3003/second/second
curl http://localhost:3003/yellow-submarine/third
curl http://localhost:3003/second/fourth/fourth
curl http://localhost:3003/global

