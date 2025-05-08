/**
 * @file sortSkills.ts
 * @description
 * Utility to dedupe and alphabetically sort an array of skill strings using locale-aware comparison.
 */

/**
 * Returns a sorted array of unique skills.
 *
 * @param {string[]} skills - Array of skill names (may contain duplicates).
 * @returns {string[]} Alphabetically sorted array of unique skill names.
 */
export const getSortedUniqueSkills = (skills: string[]): string[] => {
  // Use Set to remove duplicates, then sort using localeCompare for correct ordering
  const unique = Array.from(new Set(skills));
  return unique.sort((a, b) => a.localeCompare(b));
};
