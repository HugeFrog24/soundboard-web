import { metadata } from '../metadata';

export default function PrivacyPolicy() {
  const { app, company, legal } = metadata;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <article className="prose prose-gray dark:prose-invert lg:prose-lg mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">Privacy Policy</h1>

          <p className="text-gray-500 italic">Last Updated: {legal.lastUpdated}</p>

          <p>
            Welcome to the {app.name} developed by {company.name} (&ldquo;we,&rdquo;
            &ldquo;us,&rdquo; &ldquo;our&rdquo;, &ldquo;me&rdquo;). We are committed to protecting
            your privacy and ensuring you have a positive experience while using our app. This
            Privacy Policy explains how we handle your information in our {app.name}, available on
            the Google Play Store. As our app is designed to entertain without compromising your
            privacy, please take a moment to understand our practices.
          </p>

          <ol className="list-decimal space-y-8">
            <li>
              <h2 className="font-bold text-2xl mt-2">Information We Collect</h2>
              <p>
                The {app.name} does not collect, store, or transmit any personal or non-personal
                information. The app requires internet access to download sound assets on demand,
                which keeps the initial app size small and allows us to deliver new content without
                requiring full app updates. No data is ever uploaded from your device.
              </p>
            </li>

            <li>
              <h2 className="font-bold text-2xl mt-2">How We Use Information</h2>
              <p>
                Since our app does not collect any information, there is no use of personal or
                non-personal data within the app.
              </p>
            </li>

            <li>
              <h2 className="font-bold text-2xl mt-2">Sharing of Information</h2>
              <p>
                We do not have any information to share or disclose to third parties as the app does
                not collect any data.
              </p>
            </li>

            <li>
              <h2 className="font-bold text-2xl mt-2">Data Security</h2>
              <p>
                The app&apos;s design ensures your privacy by never collecting or transmitting
                personal data. Internet access is used exclusively for downloading new content.
              </p>
            </li>

            <li>
              <h2 className="font-bold text-2xl mt-2">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy in the future, particularly as we plan to
                integrate analytics features to improve our app&apos;s services. Such updates will
                be communicated through our app and on the Google Play Store page. Please review our
                Privacy Policy periodically for any changes.
              </p>
            </li>

            <li>
              <h2 className="font-bold text-2xl mt-2">Your Consent</h2>
              <p>
                By using the {app.name}, you consent to this Privacy Policy. If you do not agree
                with our policies, please do not download or use our app.
              </p>
            </li>

            <li>
              <h2 className="font-bold text-2xl mt-2">Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or the {app.name},
                please feel free to contact us.
              </p>
            </li>
          </ol>

          <p>
            Thank you for choosing the {app.name} by {company.name}. Enjoy a private, secure, and
            fun experience!
          </p>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p>
              {company.developer}
              <br />
              {company.email}
              <br />
              {company.location}
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
