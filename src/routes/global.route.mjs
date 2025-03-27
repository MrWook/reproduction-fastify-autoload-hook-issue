const routes = async (fastify) => {
  fastify.get('/global', async () => {
    console.log('global')
    return { message: 'ok' }
  })
}

export default routes
