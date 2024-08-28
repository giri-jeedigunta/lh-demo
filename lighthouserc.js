module.exports = {
    ci: {
      collect: {
        url: ['https://docs.brew.sh/Installation'],
      },
      upload: {
        target: 'lhci',
        serverBaseUrl: 'http://localhost:9001',
        token: '', // the build token provider by the wizard. Could also use LHCI_TOKEN variable instead
      },
    },
  };