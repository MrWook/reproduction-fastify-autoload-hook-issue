const pluginRegister = async (fastify) => {
  fastify.addHook('onRequest', async () => {
    console.log('SECOND_HOOK_REQUESTED')
  })
}

export default pluginRegister
