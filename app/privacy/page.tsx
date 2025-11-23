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

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  1
                </span>
                Information We Collect
              </h2>
              <p className="text-gray-700">
                We do not collect any personal information from users of the App. Personal information includes data
                such as names, email addresses, phone numbers, or other identifiable information. The App is designed to
                function without requiring or collecting any such data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  2
                </span>
                Non-Personal Information
              </h2>
              <p className="text-gray-700">
                The App does not collect or store general usage data on our servers, except for the specific data points
                mentioned in this policy (User-Generated Content and Device Identifiers). However, certain features,
                such as the video section, may require an internet connection to stream content from YouTube.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  3
                </span>
                Data Collection and Processing
              </h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">User-Generated Content (Tracing Data)</h3>
                <p className="text-gray-700">
                  To provide feedback on your child's learning progress, the App collects and processes user-generated
                  content in the form of traced images. When a user traces an alphabet or pattern:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    The traced image data is temporarily transmitted to our processing model (a secure third-party
                    service).
                  </li>
                  <li>
                    The model analyzes the tracing to identify the Urdu letter or pattern and provides immediate
                    feedback to the user.
                  </li>
                  <li>
                    This data is used solely for <strong>App Functionality</strong> purposes.
                  </li>
                </ul>
                <p className="text-gray-700">
                  This process falls under the "Other user-generated content" category. We do not use this data for any
                  other purpose, and it is not linked to any personal user identity.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  4
                </span>
                Device Identifiers
              </h2>
              <p className="text-gray-700">
                The App collects specific device information, including Device IDs or other identifiers. This data is
                collected solely for <strong>App Functionality</strong> and <strong>Security</strong> purposes to ensure
                the proper operation of the App. We do not use these identifiers for advertising, marketing, or tracking
                users across other apps or websites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  5
                </span>
                Third-Party Content (YouTube Videos)
              </h2>
              <p className="text-gray-700">
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
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  6
                </span>
                Local Data Storage
              </h2>
              <p className="text-gray-700">
                The App does not store any data locally on your device, including user progress, settings, or cached
                videos. All functionality, such as tracing patterns or accessing videos, operates without saving data on
                your device.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  7
                </span>
                App Permissions
              </h2>
              <p className="text-gray-700 mb-4">
                To ensure the proper functionality of the App, the following permissions are requested on your device.
                We only request permissions that are absolutely necessary for the App's core features:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  <strong>INTERNET & ACCESS_NETWORK_STATE:</strong> These permissions are required to stream educational
                  story videos from YouTube, verify in-app purchases, and transmit tracing data to our secure processing
                  model for feedback.
                </li>
                <li>
                  <strong>BILLING:</strong> This permission is required by Google Play to securely process in-app
                  purchases for unlocking additional alphabet content.
                </li>
                <li>
                  <strong>CHECK_LICENSE:</strong> This permission is used to verify that the App was legitimately
                  downloaded from the Google Play Store, helping to prevent piracy.
                </li>
                <li>
                  <strong>POST_NOTIFICATIONS:</strong> This permission may be requested to send important updates or
                  learning reminders. You can choose to allow or deny this permission in your device settings without
                  affecting the core functionality of the App.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  8
                </span>
                Children's Privacy
              </h2>
              <p className="text-gray-700">
                Alif Ujaala is designed for children aged 1-7, and we take children's privacy seriously. We comply with
                applicable laws, including the Children's Online Privacy Protection Act (COPPA) in the United States and
                the General Data Protection Regulation (GDPR) for children in the European Union. Since we do not
                collect any personal information, no parental consent is required for use of the App. The App is a
                single-user experience with no social features or advertisements that could impact children's privacy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  9
                </span>
                In-App Purchases
              </h2>
              <p className="text-gray-700">
                The App offers in-app purchases that allow users to unlock additional Urdu alphabet tracing activities.
                Certain alphabets (e.g., "Alif" and "Bey") are available for free, while others (e.g., "Pey") are locked
                and require a one-time payment to access. Each paid alphabet has the same purchase price. All in-app
                purchases are processed securely through Google Play's payment system, and we do not collect or store
                any payment-related information, such as credit card details or billing information. Parents or
                guardians are encouraged to review and manage in-app purchase settings on their devices to prevent
                unauthorized purchases.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  10
                </span>
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700">
                We may update this Privacy Policy at our discretion to reflect changes in the App or legal requirements.
                Any updates will be posted within the App or on this page. We encourage you to review this Privacy
                Policy periodically for any changes.
              </p>
            </section>

            <section className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  11
                </span>
                Contact Us
              </h2>
              <p className="text-gray-700">
                If you have any questions or concerns about this Privacy Policy or the App, please contact us at:
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong>{" "}
                <a href="mailto:msallar.ba@gmail.com" className="text-orange-500 hover:underline break-all">
                  msallar.ba@gmail.com
                </a>
              </p>
            </section>
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
