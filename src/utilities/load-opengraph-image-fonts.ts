export async function loadOpengraphImageFonts() {
  const inter400 = await fetch(
    new URL(
      '../../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff',
      import.meta.url,
    ),
  ).then((response) => response.arrayBuffer());
  const inter700 = await fetch(
    new URL(
      '../../node_modules/@fontsource/inter/files/inter-latin-700-normal.woff',
      import.meta.url,
    ),
  ).then((response) => response.arrayBuffer());

  return { inter400, inter700 };
}
