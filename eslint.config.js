import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
  },
  {
    rules: {
      'vue/no-export-in-script-setup': 'off',
      'symbol-description': 'off',
    },
  },
)
