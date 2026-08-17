import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign In - Atelier Nord" },
      { name: "description", content: "Sign in or create an Atelier Nord account to track orders and save pieces." },
      { property: "og:title", content: "Sign In - Atelier Nord" },
      { property: "og:description", content: "Access your orders, addresses and wishlist." },
      { property: "og:url", content: "/login" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/login" }],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="shell flex justify-center py-16">
      <div className="w-full max-w-md">
        <header className="text-center">
          <p className="eyebrow">Account</p>
          <h1 className="mt-3 text-4xl">Welcome back</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Orders, addresses and saved pieces in one place.
          </p>
        </header>

        <Tabs defaultValue="signin" className="mt-10">
          <TabsList className="grid w-full grid-cols-2 rounded-full bg-surface p-1">
            <TabsTrigger value="signin" className="rounded-full py-2.5 text-xs data-[state=active]:bg-background">
              Sign in
            </TabsTrigger>
            <TabsTrigger value="register" className="rounded-full py-2.5 text-xs data-[state=active]:bg-background">
              Create account
            </TabsTrigger>
          </TabsList>

          <TabsContent value="signin" className="mt-8">
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Signed in");
              }}
            >
              <Field id="login-email" label="Email" type="email" required />
              <Field id="login-password" label="Password" type="password" required />
              <Button type="submit" size="lg" className="mt-2">
                Sign in
              </Button>
              <button
                type="button"
                onClick={() => toast("Reset link sent if the email exists")}
                className="link-underline self-center text-xs text-muted-foreground"
              >
                Forgot your password?
              </button>
            </form>
          </TabsContent>

          <TabsContent value="register" className="mt-8">
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Account created");
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="reg-first" label="First name" required />
                <Field id="reg-last" label="Last name" required />
              </div>
              <Field id="reg-email" label="Email" type="email" required />
              <Field id="reg-password" label="Password" type="password" required />
              <Button type="submit" size="lg" className="mt-2">
                Create account
              </Button>
            </form>
          </TabsContent>
        </Tabs>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Already signed in?{" "}
          <Link to="/account" className="link-underline">
            Go to your account
          </Link>
        </p>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  ...props
}: { id: string; label: string } & React.ComponentProps<typeof Input>) {
  return (
    <div>
      <Label htmlFor={id} className="text-xs text-muted-foreground">
        {label}
      </Label>
      <Input id={id} className="mt-2 h-11 rounded-xl" {...props} />
    </div>
  );
}
