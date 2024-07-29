"use client";

import { login, signup } from "./actions";
import { Button, Card, TextField } from "@radix-ui/themes";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form className="flex flex-col gap-4">
          <TextField.Root
            type="email"
            name="email"
            size="1"
            placeholder="Enter your email"
          />
          <TextField.Root
            type="password"
            name="password"
            size="1"
            placeholder="Enter your password"
          />
          <Button formAction={login}>
            <EnvelopeClosedIcon />
            Login
          </Button>
          <Button formAction={signup}>
            <EnvelopeClosedIcon />
            Sign Up
          </Button>
        </form>
      </Card>
    </div>
  );
}
