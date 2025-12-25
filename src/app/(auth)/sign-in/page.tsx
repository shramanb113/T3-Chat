"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

const SignInPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
      errorCallbackURL: "/error",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen  bg-gray-400">
      <div className="flex justify-center items-center min-w-screen">
        <Card className="w-full max-w-md p-8 shadow-[0_4px_20px_rgba(0,0,0,0.25)] border rounded-2xl bg-card">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-3">
              <h1 className="text-3xl font-bold text-foreground tracking-tight">
                Welcome to
              </h1>
              <Image
                src="/logo.svg"
                alt="logo"
                width={142}
                height={142}
                className="animate-fade-in"
              />
            </div>
          </CardHeader>

          <CardContent>
            <form className="flex flex-col justify-center items-center gap-8">
              <Button
                onClick={handleSignIn}
                className="w-full h-14 bg-gray-700 hover:bg-green-700 text-white font-semibold flex items-center justify-center gap-3 rounded-lg"
                size="lg"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-4 border-t-transparent border-white"></span>
                    Signing in...
                  </>
                ) : (
                  <>
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      alt="github icon"
                      width={24}
                      height={24}
                    />
                    <span>Sign in with GitHub</span>
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignInPage;
