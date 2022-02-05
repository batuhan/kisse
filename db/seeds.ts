import { SecurePassword } from "blitz"
import safeEmail from "app/auth/utils/safeEmail"
import db, { GlobalRole } from "./index"

const assetTypeDefaults = {
  timeBased: false,
  infiniteStock: true,
  pricing: {
    ownerFeesPercent: 10,
    takerFeesPercent: 0,
  },
  active: true,
}

const assetTypes = [
  {
    ...assetTypeDefaults,
    name: "Single Payment - Assets with Deliverables",
  },
  {
    ...assetTypeDefaults,
    name: "Single Payment - Assets with Deliverables (Limited Availability)",
    timeBased: false,
    infiniteStock: true,
  },
  {
    ...assetTypeDefaults,
    name: "Subscription - Generic",
    timeBased: true,
  },
  {
    ...assetTypeDefaults,
    name: "Single Payment - Time-based Services",
    timeBased: true,
    timing: {
      timeUnit: "m",
      maxDuration: { m: 360 },
      minDuration: { m: 15 },
    },
  },
]

const categories = [
  {
    name: "Online Education",
  },
  {
    name: "E-book",
  },
  {
    name: "Digital Artwork",
  },
  {
    name: "Dataset",
  },
]

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * or https://github.com/Marak/Faker.js to easily generate
 * realistic data.
 */
const seed = async () => {
  for (let i = 0; i < 5; i++) {
    await db.inviteCode.create({ data: { code: "TESTCODE" + i, referrer: "dev" } })
  }
  await db.assetCategory.createMany({
    data: [...categories],
    skipDuplicates: true,
  })

  await db.assetType.createMany({
    data: [...assetTypes],
    skipDuplicates: true,
  })

  await db.domain.createMany({
    data: [
      {
        domain: "saltana.dev",
        provider: "NATIVE",
      },
      {
        domain: "saltana.com",
        provider: "NATIVE",
      },
    ],
  })
  const defaultPassword = "only works in dev"
  const passwordHasher = (password = defaultPassword) => SecurePassword.hash(password.trim())

  const defaultHashedPassword = await passwordHasher()

  console.log(`default password is ${defaultPassword}`)
  const createUser = async (user: string, role: GlobalRole, extraOpts = {}) => {
    const email = `testuser${user}@saltana.dev`
    const emailSafe = safeEmail(email)
    const createdUser = await db.user.create({
      data: {
        emails: {
          create: {
            email,
            emailSafe,
          },
        },
        hashedPassword: defaultHashedPassword,
        roles: [role],
        ...extraOpts,
      },
      select: {
        emails: true,
      },
    })
    const prefersEmail = createdUser.emails[0]

    if (prefersEmail) {
      await db.user.update({
        where: { id: prefersEmail.userId },
        data: {
          prefersEmailId: prefersEmail.id,
        },
      })
    }

    console.log(`creating test user ${user} with role ${role}, email: testuser+${user}@saltana.dev`)
  }

  await Promise.all([
    // Mighty admin
    createUser("r00t", "SUPERADMIN"),
    // Creator
    createUser("batuhan", "CREATOR", {
      memberships: {
        create: {
          role: "OWNER",
          organization: {
            create: {
              name: "Batuhan Icoz",
              slug: "batuhan",
            },
          },
        },
      },
    }),
    createUser("fatih", "CREATOR", {
      memberships: {
        create: {
          role: "OWNER",
          organization: {
            create: {
              name: "Fatih Guner",
              slug: "fatih",
            },
          },
        },
      },
    }),
    // Users
    createUser("u1", "USER"),
    createUser("u2", "USER"),
    createUser("u3", "USER"),
    createUser("u4", "USER"),
    createUser("u5", "USER"),
  ])
}

export default seed
