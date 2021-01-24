module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'categories:accessibility': off,
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
