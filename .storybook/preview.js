export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "default",
    values: [
      { name: "light", value: "rgb(248, 248, 248)" },
      { name: "dark", value: "rgb(51, 51, 51)" },
      { name: 'default', value: '#99cc99', }
    ],
  }
}