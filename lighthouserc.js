module.exports = {
  ci: {
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
      target: 'temporary-public-storage',
    },
  },
};
