import { metadata } from './metadata';

export default function Home() {
  const { app } = metadata;
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {app.name}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            {app.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={app.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white rounded-full inline-flex items-center justify-center px-8 py-4 text-lg font-medium hover:bg-gray-900 transition-colors text-center w-full sm:w-auto"
            >
              Download on Google Play
            </a>
            <a
              href={app.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black border-2 border-black rounded-full inline-flex items-center justify-center px-8 py-4 text-lg font-medium hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-white dark:hover:bg-gray-700 transition-colors text-center w-full sm:w-auto"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* App Screenshots */}
        <div className="mt-20 flex justify-center gap-8 flex-wrap">
          <div className="w-64 h-[500px] bg-gray-200 dark:bg-gray-800 rounded-3xl shadow-lg flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">Screenshot 1</span>
          </div>
          <div className="w-64 h-[500px] bg-gray-300 dark:bg-gray-700 rounded-3xl shadow-lg flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">Screenshot 2</span>
          </div>
          <div className="w-64 h-[500px] bg-gray-200 dark:bg-gray-800 rounded-3xl shadow-lg flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">Screenshot 3</span>
          </div>
        </div>

        {/* Features Section */}
        <section className="mt-32">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Features that make us special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {app.features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black dark:bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white dark:text-black text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Download Section */}
        <section className="mt-32 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Join thousands of users who make their sound experience better
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={app.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white rounded-full inline-flex items-center justify-center px-8 py-4 text-lg font-medium hover:bg-gray-900 transition-colors text-center w-full sm:w-auto"
            >
              Download Now
            </a>
            <a
              href={app.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black border-2 border-black rounded-full inline-flex items-center justify-center px-8 py-4 text-lg font-medium hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-white dark:hover:bg-gray-700 transition-colors text-center w-full sm:w-auto"
            >
              View Source
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
