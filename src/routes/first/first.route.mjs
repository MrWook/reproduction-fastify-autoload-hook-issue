const routes = async (fastify) => {
  fastify.get('/first', async () => {
    console.log('first')
    return { message: 'ok' }
  })
}

export default routes
