const pluginRegister = async (fastify) => {
  fastify.addHook('onRequest', async () => {
    console.log('GLOBAL_HOOK_REQUESTED')
  })
}

export default pluginRegister
