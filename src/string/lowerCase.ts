import { isNullOrUndefined } from '../__internal/objectUtils';

/**
 * Converts `string`, as space separated words, to lower case.
 *
 * @since 0.0.1
 * @param {string} string The string to convert.
 * @returns {string} Returns the lower cased string.
 * @example
 *
 * lowerCase('--Foo-Bar--');
 * // => 'foo bar'
 *
 * lowerCase('fooBar');
 * // => 'foo bar'
 *
 * lowerCase('__FOO_BAR__');
 * // => 'foo bar'
 */
export default function (string: string): string {
  return isNullOrUndefined(string) ? '' : string.toLowerCase();
}
