const routes = async (fastify) => {
  fastify.get('/second', async () => {
    console.log('second')
    return { message: 'ok' }
  })
}

export default routes
