import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/protectedPage')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/protectedPage"!</div>
}
