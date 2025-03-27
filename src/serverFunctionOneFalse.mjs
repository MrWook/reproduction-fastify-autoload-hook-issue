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
  dirNameRoutePrefix: function rewrite(folderParent, folderName) {
    // this is ok
    if (folderName === 'third') {
      return 'yellow-submarine'
    }
    // ISSUE: with this the parent folder will use hooks inside this folder
    if (folderName === 'first') {
      return false
    }
    // this is ok
    return folderName
  },
})

// Run the server!
fastify.listen({port: 3003}, function (err, address) {
  console.log(err)
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})
