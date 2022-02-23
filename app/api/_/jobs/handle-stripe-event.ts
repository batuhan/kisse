import db from "db"
import { Queue } from "quirrel/blitz"

export interface StripeWebhookEvent {
  data: { [key: string]: any }
  object: "event"
  type: "user.created"
}

export default Queue(
  "api/_/jobs/handle-stripe-event", // the path of this API route
  async ({ data, type }: StripeWebhookEvent) => {


    ///verify it
    switch (type) {
      case "user.created":
        const user = await db.user.create({
          data: {
            // username: data.username,
            createdAt: data.created_at,
            updatedAt: data.updated_at,
            // emails: {

            // },
            privateMetadata: {
              isClerk: true,
              clerk: {},
            },
          },
        })
        break
      default:
    }
    console.log(`Recieved a Clerk event: ${JSON.stringify(data, null, 2)}`)
  }
)
