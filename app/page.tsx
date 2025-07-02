import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Pencil, Star, Mail, Heart, Sparkles } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-300 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-orange-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-pink-400 rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-purple-400 rounded-full opacity-50 animate-bounce delay-300"></div>
        <div className="absolute top-60 left-1/3 w-8 h-8 bg-green-400 rounded-full opacity-60 animate-pulse delay-500"></div>
        <div className="absolute bottom-60 right-1/4 w-14 h-14 bg-blue-400 rounded-full opacity-50 animate-bounce delay-700"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 relative">
              <Image
                src="/logo.png"
                alt="Alif Ujaala Logo"
                width={64}
                height={64}
                className="rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h1 className="text-3xl font-black text-gray-800 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Alif Ujaala
            </h1>
          </div>
          <Link href="/privacy">
            <Button
              variant="outline"
              size="sm"
              className="border-2 border-purple-300 hover:bg-purple-100 font-semibold bg-transparent"
            >
              Privacy Policy
            </Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-16 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h2 className="text-6xl md:text-7xl font-black text-gray-800 mb-4 leading-tight">
              Learn Urdu the
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                {" "}
                Fun Way!
              </span>
            </h2>
            <div className="flex justify-center space-x-4 text-4xl mb-6">
              <span className="animate-bounce">🌟</span>
              <span className="animate-bounce delay-100">📚</span>
              <span className="animate-bounce delay-200">✨</span>
              <span className="animate-bounce delay-300">🎨</span>
              <span className="animate-bounce delay-400">🎉</span>
            </div>
          </div>

          <p className="text-2xl text-gray-700 mb-10 max-w-3xl mx-auto font-semibold leading-relaxed">
            An amazing educational adventure for children aged 1-7 to learn Urdu through
            <span className="text-orange-500"> interactive tracing</span>,
            <span className="text-pink-500"> alphabet fun</span>, and
            <span className="text-purple-500"> exciting story videos!</span>
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full px-8 py-4 shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-lg">🎯 Ages 1-7</span>
            </div>
            <div className="bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full px-8 py-4 shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-lg">🎮 Interactive Fun</span>
            </div>
            <div className="bg-gradient-to-r from-purple-400 to-purple-500 text-white rounded-full px-8 py-4 shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-lg">📝 Urdu Alphabets</span>
            </div>
          </div>

          {/* Fun alphabet display */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl mb-16 border-4 border-dashed border-purple-300">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Meet the Urdu Alphabets! 🎭</h3>
            <div className="flex justify-center space-x-8 text-6xl">
              <span className="hover:scale-125 transition-transform duration-300 cursor-pointer bg-gradient-to-r from-orange-200 to-orange-300 rounded-2xl p-4 shadow-lg">
                ا
              </span>
              <span className="hover:scale-125 transition-transform duration-300 cursor-pointer bg-gradient-to-r from-pink-200 to-pink-300 rounded-2xl p-4 shadow-lg">
                ب
              </span>
              <span className="hover:scale-125 transition-transform duration-300 cursor-pointer bg-gradient-to-r from-purple-200 to-purple-300 rounded-2xl p-4 shadow-lg">
                پ
              </span>
              <span className="hover:scale-125 transition-transform duration-300 cursor-pointer bg-gradient-to-r from-green-200 to-green-300 rounded-2xl p-4 shadow-lg">
                ت
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h3 className="text-5xl font-black text-gray-800 mb-4">Why Kids Love Alif Ujaala? 💖</h3>
          <div className="flex justify-center space-x-2 text-3xl">
            <Sparkles className="text-yellow-400 animate-spin" />
            <Heart className="text-red-400 animate-pulse" />
            <Sparkles className="text-blue-400 animate-spin" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 bg-gradient-to-br from-orange-100 via-orange-50 to-yellow-50 border-4 border-orange-200 hover:border-orange-300">
            <CardContent className="p-10 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl animate-bounce">
                <Pencil className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-2xl font-black text-gray-800 mb-4">✏️ Magic Tracing</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                Watch letters come alive as kids trace beautiful Urdu alphabets with their fingers! Each stroke teaches
                proper writing techniques in the most fun way possible! 🎨
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 bg-gradient-to-br from-pink-100 via-pink-50 to-rose-50 border-4 border-pink-200 hover:border-pink-300">
            <CardContent className="p-10 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl animate-pulse">
                <Play className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-2xl font-black text-gray-800 mb-4">🎬 Story Adventures</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                Dive into exciting alphabet adventures with colorful story videos! Each letter has its own magical tale
                that makes learning unforgettable! 📺✨
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 bg-gradient-to-br from-purple-100 via-purple-50 to-indigo-50 border-4 border-purple-200 hover:border-purple-300">
            <CardContent className="p-10 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl animate-spin">
                <Star className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-2xl font-black text-gray-800 mb-4">🌟 Level Up Fun</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                Start your journey with free letters like "Alif" and "Bey", then unlock amazing new alphabets as you
                become a Urdu writing superstar! 🏆
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-lg rounded-3xl p-12 mx-4 shadow-2xl border-4 border-dashed border-rainbow">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-5xl font-black text-gray-800 mb-6">🚀 Start Your Urdu Adventure!</h3>
            <p className="text-2xl text-gray-700 mb-12 font-semibold">
              Jump into the fun with free content, then unlock the full alphabet universe! 🌈
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <Card className="border-4 border-green-300 bg-gradient-to-br from-green-100 to-emerald-100 shadow-2xl transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">🎁</div>
                  <h4 className="text-3xl font-black text-green-700 mb-4">FREE Starter Pack!</h4>
                  <p className="text-green-600 mb-6 text-lg font-semibold">Begin the magic right now!</p>
                  <div className="space-y-3 text-green-700 font-semibold">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-2xl">ا</span>
                      <span>"Alif" tracing fun</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-2xl">ب</span>
                      <span>"Bey" writing adventure</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-2xl">📺</span>
                      <span>Amazing story videos</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-4 border-orange-300 bg-gradient-to-br from-orange-100 to-yellow-100 shadow-2xl transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">⭐</div>
                  <h4 className="text-3xl font-black text-orange-700 mb-4">Premium Universe!</h4>
                  <p className="text-orange-600 mb-6 text-lg font-semibold">Unlock ALL the alphabet magic!</p>
                  <div className="space-y-3 text-orange-700 font-semibold">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-2xl">🔤</span>
                      <span>Complete Urdu alphabet</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-2xl">🎨</span>
                      <span>Advanced tracing patterns</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-2xl">💎</span>
                      <span>One-time unlock per letter</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-dashed border-purple-300">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-16 h-16 relative">
              <Image
                src="/logo.png"
                alt="Alif Ujaala Logo"
                width={64}
                height={64}
                className="rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="text-3xl font-black bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              Alif Ujaala
            </span>
          </div>
          <p className="text-xl text-gray-700 mb-8 font-semibold leading-relaxed">
            🌟 Empowering young minds to learn Urdu through magical, interactive experiences! Every child deserves to
            discover the beauty of their language! 💖
          </p>
          <div className="flex items-center justify-center space-x-3 text-gray-700 mb-8">
            <Mail className="w-6 h-6 text-purple-500" />
            <a
              href="mailto:msallar.ba@gmail.com"
              className="hover:text-purple-500 transition-colors text-lg font-semibold hover:underline"
            >
              msallar.ba@gmail.com
            </a>
          </div>
          <div className="pt-6 border-t-2 border-dashed border-purple-200">
            <p className="text-gray-600 font-semibold">
              © 2025 Alif Ujaala • Made with 💖 for amazing young learners!
              <span className="text-2xl ml-2">🎉</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
