const pluginRegister = async (fastify) => {
  fastify.addHook('onRequest', async () => {
    console.log('THIRD_HOOK_REQUESTED')
  })
}

export default pluginRegister
