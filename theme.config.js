export default {
    repository: 'https://github.com/api-monetization/docs-template', // project repo
    docsRepository: 'https://github.com/api-monetization/docs-template', // docs repo
    branch: 'master', // branch of docs
    path: '/', // path of docs
    titleSuffix: ' – SaaS.dev',
    nextLinks: true,
    prevLinks: true,
    search: true,
    customSearch: null, // customizable, you can use algolia for example
    darkMode: true,
    footer: true,
    footerText: 'Powered by SaaS.dev',
    footerEditOnGitHubLink: true, // will link to the docs repo
    logo: <>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
      <span>API Documentation</span>
    </>,
    head: <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Nextra: the next docs builder" />
      <meta name="og:title" content="Nextra: the next docs builder" />
    </>
  }