import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { ClerkProvider } from "@clerk/tanstack-react-start";

import Header from "../components/Header";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Fast SaaS",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
});

function RootDocument({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <HeadContent />
        </head>
        <body>
          <Header />
          {children}
          {/* <TanStackDevtools
          config={{
            position: "bottom-right",
            }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
              },
          ]}
        /> */}
          <Scripts />
        </body>
      </html>
    </ClerkProvider>
  );
}
