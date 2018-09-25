// @flow

export const webext = typeof window.chrome !== 'undefined' ? window.chrome : window.browser;


export function validateJson(text: string): boolean {
  return Boolean(text && /^[\],:{}\s]*$/.test(text.replace(/\\['\\/bfnrtu]/g, '@')
    .replace(/'[^'\\\n\r]*'|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/g, ']')
    .replace(/(?:^|:|,)(?:\s*\[)+/g, '')));
}

export function makeId(): string {
  return `_${Math.random()}`
    .toString(36)
    .substr(2, 9);
}

export function elipse(source: string, part1: number = 12, part2: number = 15): string {
  if (source.length <= part1 + part2) {
    return source;
  }
  const newsource = source.replace(/https?:\/\//, '');
  return `${newsource.slice(0, part1)}...${newsource.slice(newsource.length - part2)}`;
}

export function copyClipboard(value: string): boolean {
  try {
    const $body = document.getElementsByTagName('body')[0];
    const $tempInput = document.createElement('INPUT');

    // $tempInput.style.display = 'none';
    $body.appendChild($tempInput);

    $tempInput.setAttribute('value', value);
    $tempInput.select();

    document.execCommand('copy');
    $body.removeChild($tempInput);
    return true;
  } catch (e) {
    return false;
  }
}
