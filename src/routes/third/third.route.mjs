const routes = async (fastify) => {
  fastify.get('/third', async () => {
    console.log('third')
    return { message: 'ok' }
  })
}

export default routes
