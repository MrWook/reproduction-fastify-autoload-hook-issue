const pluginRegister = async (fastify) => {
  fastify.addHook('onRequest', async () => {
    console.log('FIRST_HOOK_REQUESTED')
  })
}

export default pluginRegister
