module.exports = {
  ci: {
    collect: {
      preset: 'desktop',
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'categories:accessibility': 'off',
        bypass: 'off',
        'maskable-icon': 'off',
        'offline-start-url': 'off',
        'service-worker': 'off',
        'unused-javascript': 'off',
        'works-offline': 'off',
        'render-blocking-resources': 'off',
      },
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: `${process.env.LHCI_SERVER_BASE_URL}`,
      token: `${process.env.LHCI_BUILD_TOKEN}`,
    },
  },
};
