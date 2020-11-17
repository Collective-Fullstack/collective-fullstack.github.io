// micromarkup. Written by @ehne. Can be found on gist.

/* eslint-disable no-useless-escape */
export default function micromarkupParse(mmInput) {
  // its just very very much stripped back markdown.
  // supports:
  // * links: `[click me](https://example.com)`
  // * bold: `**hello**`
  // * italic: `*hello*`
  // (supports understores instead of stars, if you want to use it that way)

  // links
  let mm = mmInput.replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)[\)]{1}/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  // bold
  mm = mm.replace(/[\*\_]{2}([^\*\_]+)[\*\_]{2}/g, '<b>$1</b>');
  // italics
  mm = mm.replace(/[\*\_]{1}([^\*\_]+)[\*\_]{1}/g, '<i>$1</i>');

  // optional support for highlights
  // syntax: `::highlighed::``
  // mm = mm.replace(/[\:]{2}([^\:]+)[\:]{2}/g, "<mark>$1</mark>")

  // optional custom superscript and subscript syntax:
  // subscripts: `ˇsubscriptˇ` (option + shift + T on macos)
  // mm = mm.replace(/[ˇ]{1}([^\ˇ]+)[\ˇ]{1}/g, "<sub>$1</sub>")
  // superscripts:`ˆSuperˆ` (option + shift + I on macos)
  // mm = mm.replace(/[ˆ]{1}([^\ˆ]+)[\ˆ]{1}/g, "<sup>$1</sup>")

  return mm;
}
