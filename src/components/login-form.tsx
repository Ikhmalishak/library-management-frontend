import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import * as React from "react"
import { useState } from "react"
import { login } from "@/services/auth.services"
import { Spinner } from "@/components/ui/spinner"
import { useNavigate } from "react-router-dom"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    try {
      const data = await login(email, password);

      if (data && data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.data));

        //set delay for spping
        await new Promise(resolve => setTimeout(resolve, 2000));
        navigate('/dashboard');
      }
    } catch (error: unknown) {
      // Attempt to extract message from error object if possible
      const message = (error as { response?: { data?: { message?: string } } }).response?.data?.message;
      setErrorMessage(message || "Failed to connect. Please try again.");
    } finally {
        setIsLoading(false);
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border-none shadow-none bg-transparent p-6">
        <CardHeader className="text-left px-0 pb-6">
          <CardTitle className="text-3xl font-extrabold tracking-tight text-slate-900">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-slate-500 text-sm mt-1">
            Access your library management console.
          </CardDescription>
        </CardHeader>
        <CardContent className="px-0">
          <form onSubmit={handleSubmit}>
            <FieldGroup className="gap-5">
              <Field>
                <FieldLabel htmlFor="email" className="text-slate-700 text-xs font-semibold uppercase tracking-wider">Email Address</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@library.com"
                  className="h-11 px-4 text-sm bg-slate-50/50 hover:bg-slate-50 border-slate-200 focus:border-purple-500 focus:bg-white transition-all rounded-xl shadow-xs"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center justify-between mb-1">
                  <FieldLabel htmlFor="password" className="text-slate-700 text-xs font-semibold uppercase tracking-wider">Password</FieldLabel>
                  <a
                    href="#"
                    className="text-xs hover:text-purple-600 text-slate-500 font-medium transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="h-11 px-4 text-sm bg-slate-50/50 hover:bg-slate-50 border-slate-200 focus:border-purple-500 focus:bg-white transition-all rounded-xl shadow-xs"
                  required
                />
              </Field>

              {errorMessage && (
                <p className="text-xs font-medium text-red-500 bg-red-50 p-3 rounded-lg border border-red-100 animate-shake">
                  {errorMessage}
                </p>
              )}

              <Field className="gap-3 mt-2">
                <Button type="submit" className="h-11 w-full text-sm font-semibold cursor-pointer bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-md shadow-purple-100 hover:shadow-lg hover:shadow-purple-200 transition-all">
                  {
                    isLoading ? (
                      <>
                        <Spinner className="mr-2 h-4 w-4" />
                        Signing in...
                      </>)
                      : ("Sign In")
                  }
                </Button>
                <Button variant="outline" type="button" className="h-11 w-full text-sm font-medium cursor-pointer border-slate-200 hover:bg-slate-50 rounded-xl transition-all">
                  Sign in with Google
                </Button>

                <div className="mt-4 p-3 bg-purple-50/50 border border-purple-100 rounded-xl text-xs text-purple-700 leading-relaxed">
                  <span className="font-bold">Demo Login:</span> Use <span className="font-mono bg-purple-100/80 px-1 py-0.5 rounded">admin@library.com</span> (any password) to test the offline dashboard demo!
                </div>

                <FieldDescription className="text-center text-xs text-slate-500 mt-4">
                  Don&apos;t have an account? <a href="#" className="underline font-semibold text-purple-600 hover:text-purple-700">Request access</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
