import { Glow, GlowArea } from "@/components/Cards/GlowCard";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
 } from "@/components/ui/card";

import { GamepadIcon, Lock, Rocket, Server, Trophy, Users } from "lucide-react";

export default function Home() {
  return (
    <section>
      <GlowArea className="flex items-center justify-center py-36 gap-6">
        <Glow color="red" className="rounded-xl">
          <Card className="mx-w-md">
            <CardHeader>
              <CardTitle>Free plan</CardTitle>
              <CardDescription className="mx-w-sm">
                2 Monthly free games, trials and perks for you to enjoy.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Server className="text-foreground" size={20} />
                  <span>Dedicted Low-Latency Gaming Servers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Users className="text-foreground" size={20} />
                  <span>Monthly Multiplayer Tournament Entry</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Trophy className="text-foreground" size={20} />
                  <span>Exclusive In-Game Rewards</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Rocket className="text-foreground" size={20} />
                  <span>Early access to New Game Releases</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Lock className="text-foreground" size={20} />
                  <span>Ad-Free Gaming Experience</span>
                </li>{" "}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Subscribe</Button>
            </CardFooter>
          </Card>
        </Glow>
        
        <Glow className="rounded-xl">
          <Card className="mx-w-md">
            <CardHeader>
              <CardTitle>Pro plan</CardTitle>
              <CardDescription className="mx-w-sm">
                Everything you need to game, from {" "}
                <span className="text-primary">$20/month.</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <GamepadIcon className="text-foreground" size={20} />
                  <span>Access to 500+ Premium Games</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Server className="text-foreground" size={20} />
                  <span>Dedicated Low-Latency Gaming Servers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Trophy className="text-foreground" size={20} />
                  <span>Exclusive In-Game Rewards</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Rocket className="text-foreground" size={20} />
                  <span>Early access to New Game Releases</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Lock className="text-foreground" size={20} />
                  <span>Ad-Free Gaming Experience</span>
                </li>{" "}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Subscribe</Button>
            </CardFooter>
          </Card>
        </Glow>
      </GlowArea>
    </section>
  );
};