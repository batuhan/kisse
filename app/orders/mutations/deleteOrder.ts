import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const DeleteOrder = z.object({
  id: z.string().cuid(),
})

export default resolver.pipe(resolver.zod(DeleteOrder), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const order = await db.order.deleteMany({ where: { id } })

  return order
})
