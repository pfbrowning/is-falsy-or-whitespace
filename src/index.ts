/**
 * Determines whether a string is null, undefined, empty, or whitespace-only
 * @param value string to check
 */
const isFalsyOrWhitespace = (value: string) => !value || typeof value === 'string' && value.trim().length === 0;
export default isFalsyOrWhitespace;