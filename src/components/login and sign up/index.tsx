"use client"

import { Button } from "@/src/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { signIn } from "next-auth/react";
import { Icons } from '../authIcons'
import React from "react";

const UserAuth = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      console.log("Success");
    } finally {
      setIsLoading(false);
    }
  };
  const loginWithGithub = async () => {
    setIsLoading(true);

    try {
      await signIn("github");
    } catch (error) {
      console.log("Success");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Tabs defaultValue="sign-in" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="sign-in">Sign In</TabsTrigger>
        <TabsTrigger value="sign-up">Signup</TabsTrigger>
      </TabsList>

      <TabsContent value="sign-in">
        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Welcome to our Website Sign In and Explore more!!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            
            <Button
              isLoading={isLoading}
              onClick={loginWithGoogle}
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? null : <Icons.google className='h-4 w-4 mr-2' />}
              Google
            </Button>

            <Button
              isLoading={isLoading}
              onClick={loginWithGithub}
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? null : <Icons.google className='h-4 w-4 mr-2' />}
              Github
            </Button>

            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="sign-up">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <Button
              isLoading={isLoading}
              onClick={loginWithGoogle}
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? null : <Icons.google className='h-4 w-4 mr-2' />}
              Google
            </Button>
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default UserAuth;
