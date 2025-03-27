const pluginRegister = async (fastify) => {
  fastify.addHook('onRequest', async () => {
    console.log('FIFTH_HOOK_REQUESTED')
  })
}

export default pluginRegister
