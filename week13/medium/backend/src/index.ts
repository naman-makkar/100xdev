import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
  const prisma = new PrismaClient({
    datasourceUrl: env.DATABASE_URL,
}).$extends(withAccelerate())
})

export default app

//fix
