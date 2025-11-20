import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Welcome to Xcelerator</h1>
        <p className="text-muted-foreground">A simple authentication demo</p>

        <div className="flex gap-4 justify-center pt-4">
          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>

          <Link href="/signin">
            <Button variant="outline">Sign In</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
