export const inter400 = fetch(
  new URL(
    '../../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff',
    import.meta.url,
  ),
).then((res) => res.arrayBuffer());

export const inter700 = fetch(
  new URL(
    '../../node_modules/@fontsource/inter/files/inter-latin-700-normal.woff',
    import.meta.url,
  ),
).then((res) => res.arrayBuffer());
