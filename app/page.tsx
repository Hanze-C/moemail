import { Header } from "@/components/layout/header"
import { auth } from "@/lib/auth"
import { Shield, Mail, Clock } from "lucide-react"
import { ActionButton } from "@/components/home/action-button"
import { FeatureCard } from "@/components/home/feature-card"

export const runtime = "edge"

export default async function Home() {
  const session = await auth()

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 h-screen">
      <div className="container mx-auto h-full px-4 lg:px-8 max-w-[1600px]">
        <Header />
        <main className="h-full">
          <div className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-4 relative">
            <div className="absolute inset-0 -z-10 bg-grid-primary/5" />

            <div className="w-full max-w-3xl mx-auto space-y-12 py-8">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                    MoeMail
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 tracking-wide">
                  萌萌哒自部署邮箱服务
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
                <ActionButton isLoggedIn={!!session} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
