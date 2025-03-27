import Fastify from 'fastify'
import pluginAutoload from '@fastify/autoload'
import path from 'node:path'

const fastify = Fastify({
  logger: false,
})
const defaultAutoloadOptions = {
  dir: path.join(import.meta.dirname, 'routes'),
  matchFilter: /.*.route.mjs/,
  autoHooks: true,
  autoHooksPattern: /.*.hook.mjs/,
  cascadeHooks: true,
}
fastify.register(pluginAutoload, {
  ...defaultAutoloadOptions,
  dirNameRoutePrefix: (folderParent, folderName) => {
      if (folderName === 'third') {
        return 'yellow-submarine'
      }
    // ISSUE: with this the parent folder routes and the first child routes will use the last registered hook too which would be the third.hook.mjs
    return false
  },
})
// Run the server!
fastify.listen({port: 3002}, function (err, address) {
  console.log(err)
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})
