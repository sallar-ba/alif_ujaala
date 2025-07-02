import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 md:space-x-3">
              <div className="w-8 h-8 md:w-12 md:h-12 relative">
                <Image
                  src="/logo.png"
                  alt="Alif Ujaala Logo"
                  width={48}
                  height={48}
                  className="rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-lg md:text-xl font-bold text-gray-800">Alif Ujaala</span>
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm" className="text-xs md:text-sm px-2 md:px-4 bg-transparent">
                <ArrowLeft className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Back to </span>Home
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-4 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">Privacy Policy</h1>

          <div className="prose prose-gray max-w-none text-sm md:text-base">
            <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6">
              <strong>Last Updated:</strong> July 3, 2025
            </p>

            <p className="mb-4 md:mb-6 leading-relaxed">
              This Privacy Policy explains how "Alif Ujaala" (the "App"), developed by an individual developer ("we,"
              "us," or "our"), handles information in connection with your use of the App. Alif Ujaala is an educational
              app designed for children aged 1-7 to learn Urdu through tracing patterns, Urdu alphabets, and watching
              alphabet-related story videos. We are committed to protecting your privacy, especially as our App is
              intended for young children.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4 md:mb-6 leading-relaxed">
              We do not collect any personal information from users of the App. Personal information includes data such
              as names, email addresses, phone numbers, or other identifiable information. The App is designed to
              function without requiring or collecting any such data.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">
              2. Non-Personal Information
            </h2>
            <p className="mb-4 md:mb-6 leading-relaxed">
              The App does not collect or store any non-personal information (e.g., usage data or device information) on
              our servers. However, certain features, such as the video section, may require an internet connection to
              stream content from YouTube, as described below.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">
              3. Third-Party Content (YouTube Videos)
            </h2>
            <p className="mb-4 md:mb-6 leading-relaxed">
              The App includes a video section that streams alphabet-related story videos directly from YouTube. These
              videos are embedded within the App and are subject to YouTube's own privacy policies and data collection
              practices, which are beyond our control. YouTube may collect data such as device information, IP
              addresses, or viewing activity when you access these videos. We encourage parents or guardians to review
              YouTube's Privacy Policy (available at{" "}
              <a
                href="https://www.youtube.com/yt/about/policies/"
                className="text-orange-500 hover:underline break-all"
              >
                https://www.youtube.com/yt/about/policies/
              </a>
              ) to understand how YouTube handles data.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">
              4. Local Data Storage
            </h2>
            <p className="mb-4 md:mb-6 leading-relaxed">
              The App does not store any data locally on your device, including user progress, settings, or cached
              videos. All functionality, such as tracing patterns or accessing videos, operates without saving data on
              your device.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">5. Permissions</h2>
            <p className="mb-4 md:mb-6 leading-relaxed">
              The App does not request or require any specific permissions (e.g., access to storage, camera, or
              microphone) to function. An internet connection is required to stream videos from YouTube in the video
              section, but the App does not explicitly request internet permission as it assumes users have an active
              Wi-Fi or data connection.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">
              6. Children's Privacy
            </h2>
            <p className="mb-4 md:mb-6 leading-relaxed">
              Alif Ujaala is designed for children aged 1-7, and we take children's privacy seriously. We comply with
              applicable laws, including the Children's Online Privacy Protection Act (COPPA) in the United States and
              the General Data Protection Regulation (GDPR) for children in the European Union. Since we do not collect
              any personal information, no parental consent is required for use of the App. The App is a single-user
              experience with no social features or advertisements that could impact children's privacy.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">
              7. In-App Purchases
            </h2>
            <p className="mb-4 md:mb-6 leading-relaxed">
              The App offers in-app purchases that allow users to unlock additional Urdu alphabet tracing activities.
              Certain alphabets (e.g., "Alif" and "Bey") are available for free, while others (e.g., "Pey") are locked
              and require a one-time payment to access. Each paid alphabet has the same purchase price. All in-app
              purchases are processed securely through Google Play's payment system, and we do not collect or store any
              payment-related information, such as credit card details or billing information. Parents or guardians are
              encouraged to review and manage in-app purchase settings on their devices to prevent unauthorized
              purchases.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">
              8. Changes to This Privacy Policy
            </h2>
            <p className="mb-4 md:mb-6 leading-relaxed">
              We may update this Privacy Policy at our discretion to reflect changes in the App or legal requirements.
              Any updates will be posted within the App or on this page. We encourage you to review this Privacy Policy
              periodically for any changes.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4">9. Contact Us</h2>
            <p className="mb-4 md:mb-6 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or the App, please contact us at:
            </p>
            <p className="mb-4 md:mb-6 leading-relaxed">
              <strong>Email:</strong>{" "}
              <a href="mailto:msallar.ba@gmail.com" className="text-orange-500 hover:underline break-all">
                msallar.ba@gmail.com
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-6 md:py-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-3 md:mb-4">
            <div className="w-6 h-6 md:w-8 md:h-8 relative">
              <Image src="/logo.png" alt="Alif Ujaala Logo" width={32} height={32} className="rounded-full shadow-lg" />
            </div>
            <span className="text-base md:text-lg font-bold text-gray-800">Alif Ujaala</span>
          </div>
          <p className="text-xs md:text-sm text-gray-500">© 2025 Alif Ujaala. Made with ❤️ for young learners.</p>
        </div>
      </footer>
    </div>
  )
}
