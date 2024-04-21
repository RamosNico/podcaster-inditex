import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  pendingComponent: LoadingComponent,
  component: RootComponent,
});

function RootComponent() {

  return (
    <>
      <div className="p-2 flex gap-2">
        <nav className="container mx-auto">
          <Link
            to="/"
            className="font-medium text-2xl text-sky-600 hover:underline"
          >
            Podcaster
          </Link>
        </nav>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}

function LoadingComponent() {
  return (
    <>
      <div className="p-2 flex gap-2">
        <nav className="container mx-auto">
          <Link
            to="/"
            className="font-medium text-lg text-sky-600 hover:underline"
          >
            LOADING
          </Link>
          <p>Loading...</p>
        </nav>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
