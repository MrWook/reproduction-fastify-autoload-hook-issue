const routes = async (fastify) => {
  fastify.get('/fifth', async () => {
    console.log('fifth')
    return { message: 'ok' }
  })
}

export default routes
