"use client";

import { useSession, signOut } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
    const { data: session, isPending } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!isPending && !session) {
            router.push("/signin");
        }
    }, [session, isPending, router]);

    if (isPending) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <p>Loading...</p>
            </div>
        );
    }

    if (!session) return null;

    return (
        <div className="flex min-h-screen items-center justify-center px-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Dashboard</CardTitle>
                </CardHeader>

                <CardContent className="space-y-3">
                    <div className="space-y-1">
                        <p className="font-medium">Name</p>
                        <p>{session.user.name}</p>
                    </div>

                    <div className="space-y-1">
                        <p className="font-medium">Email</p>
                        <p>{session.user.email}</p>
                    </div>

                    <Button
                        onClick={() => signOut()}
                        variant="outline"
                        className="w-full mt-4"
                    >
                        Sign Out
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
