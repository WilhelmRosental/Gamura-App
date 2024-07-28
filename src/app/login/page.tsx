"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button, Card } from "@radix-ui/themes";
import {
  DiscordLogoIcon,
  EnvelopeClosedIcon,
  TextField,
} from "@radix-ui/react-icons";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  const handleLoginWithEmail = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) {
      alert(error.message);
    } else {
      alert("Check your email for the login link!");
    }
  };

  const handleLoginWithDiscord = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "discord",
    });
    if (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <div className="flex flex-col gap-4">
          {/* <input
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-2 rounded bg-gray-700 border border-gray-600"
          /> */}
          <TextField.Root
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="1"
            placeholder="Enter your email"
          />
          <Button onClick={handleLoginWithEmail}>
            <EnvelopeClosedIcon />
            Login with Email
          </Button>
          <Button
            onClick={handleLoginWithDiscord}
            className="p-2 rounded flex items-center justify-center gap-2"
          >
            <DiscordLogoIcon />
            Login with Discord
          </Button>
        </div>
      </Card>
    </div>
  );
}
