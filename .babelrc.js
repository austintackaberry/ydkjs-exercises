const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = {
  presets: ['react', ['env', { modules: isTest ? 'commonjs' : false }]],
  plugins: ['transform-class-properties', 'transform-object-rest-spread'],
};
