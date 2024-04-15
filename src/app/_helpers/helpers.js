export const generateServiceLink = (title) => {
  // Convert title to lowercase and replace spaces with hyphens
  return `${title.toLowerCase().replace(/\s+/g, '-')}`;
};
