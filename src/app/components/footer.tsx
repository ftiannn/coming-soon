export function Footer() {
    return (
      <footer className="text-center text-sm text-gray-600 dark:text-gray-200 py-6 bg-white dark:bg-navy-900">
        © {new Date().getFullYear()}{' '}
        <a
          href="https://github.com/ftiannn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-pink hover:underline"
        >
          FT Tan
        </a>. Designed & coded with ❤️, powered by Next.js and Tailwind CSS.
      </footer>
    )
  }
  