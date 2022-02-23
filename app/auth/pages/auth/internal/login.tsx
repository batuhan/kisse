import { useRouter, BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import { LoginForm } from "app/auth/components/LoginForm"
import AppLayout from "app/core/layouts/AppLayout"

const InternalLoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <div>

      <LoginForm
        onSuccess={(_user) => {
          const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/"
          router.push(next)
        }}
      />
    </div>
  )
}

InternalLoginPage.redirectAuthenticatedTo = "/"
InternalLoginPage.getLayout = (page) => (
  <AppLayout title="Log In" showUserBox={false}>
    {page}
  </AppLayout>
)

export default InternalLoginPage