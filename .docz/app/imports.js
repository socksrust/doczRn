export const imports = {
  'Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "button" */ 'Button.mdx'),
}
