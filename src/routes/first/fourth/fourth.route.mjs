const routes = async (fastify) => {
  fastify.get('/fourth', async () => {
    console.log('fourth')
    return { message: 'ok' }
  })
}

export default routes
