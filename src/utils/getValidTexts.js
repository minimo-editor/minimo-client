export default function getValidText(text) {
  // eslint-disable-next-line no-useless-escape
  const speacialTextRegex = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\ '\"\\(\=]/gi;

  return text.replace(speacialTextRegex, '');
}
