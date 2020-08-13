/**
 * Determines whether a string is null, undefined, empty, or whitespace-only
 * @param value string to check
 */
var isFalsyOrWhitespace = function (value) { return !value || value.trim().length === 0; };

export default isFalsyOrWhitespace;
