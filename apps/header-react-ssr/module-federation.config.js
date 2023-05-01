module.exports = {
  name: 'header-react-ssr',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
