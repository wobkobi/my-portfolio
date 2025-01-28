export const getSortedUniqueSkills = (skills: string[]): string[] => {
  return [...new Set(skills)].sort((a, b) => a.localeCompare(b));
};
