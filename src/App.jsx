import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Rocket, Palette, Gauge } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 md:p-8">
      <div className="max-w-4xl w-full space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Vite + React + shadcn/ui
            <Badge variant="secondary" className="ml-2">Starter Kit</Badge>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            Start your next project with the power of Vite, React, Tailwind CSS, and shadcn/ui
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Documentation
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 pt-8">
          <Card>
            <CardHeader>
              <Rocket className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Lightning Fast</CardTitle>
              <CardDescription>
                Powered by Vite for instant server start and HMR
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Palette className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Beautiful UI</CardTitle>
              <CardDescription>
                Customizable components with shadcn/ui and Tailwind CSS
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Gauge className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Performance</CardTitle>
              <CardDescription>
                Optimized for production with best practices
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Code Example */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Ready to Use</CardTitle>
            <CardDescription>
              Start building your app with pre-configured components
            </CardDescription>
          </CardHeader>
          <CardContent className="bg-muted p-4 rounded-md font-mono text-sm">
            <pre>
              npm create vite@latest my-app -- --template react
              cd my-app
              npx shadcn-ui@latest init
            </pre>
          </CardContent>
          <CardFooter className="text-muted-foreground text-sm">
            Simple installation process, extensive component library included
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default App
