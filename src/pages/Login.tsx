
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Shield } from "lucide-react";
import Navbar from "@/components/Navbar";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean().optional()
});

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false
    }
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    // Add authentication logic here
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#070b17]">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md border-[#1a2436] bg-[#0c1524]">
          <CardHeader className="space-y-6 text-center">
            <div className="mx-auto bg-[#070b17] p-3 rounded-full w-16 h-16 flex items-center justify-center">
              <Shield className="text-[#00e5b0] w-8 h-8" />
            </div>
            <CardTitle className="text-2xl font-bold text-white">Welcome back</CardTitle>
            <CardDescription className="text-gray-400">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="email@example.com" 
                          {...field} 
                          className="bg-[#1a2436] border-[#2a3446] text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Password</FormLabel>
                      <FormControl>
                        <Input 
                          type="password" 
                          placeholder="••••••••" 
                          {...field} 
                          className="bg-[#1a2436] border-[#2a3446] text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex items-center justify-between">
                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                        <FormControl>
                          <Checkbox 
                            checked={field.value} 
                            onCheckedChange={field.onChange} 
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-medium text-gray-400 cursor-pointer">
                          Remember me
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                  
                  <Link to="/forgot-password" className="text-sm font-medium text-[#00e5b0] hover:underline">
                    Forgot password?
                  </Link>
                </div>
                
                <Button type="submit" className="w-full bg-[#00e5b0] text-[#070b17] hover:bg-[#00e5b0]/90">
                  Sign In
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex justify-center border-t border-[#1a2436] pt-4">
            <p className="text-gray-400 text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#00e5b0] hover:underline font-medium">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
};

export default Login;
