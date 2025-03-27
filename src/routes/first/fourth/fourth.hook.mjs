const pluginRegister = async (fastify) => {
  fastify.addHook('onRequest', async () => {
    console.log('FOURTH_HOOK_REQUESTED')
  })
}

export default pluginRegister
