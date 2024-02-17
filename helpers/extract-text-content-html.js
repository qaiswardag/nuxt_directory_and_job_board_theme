export const extractTextContentHTML = function extractTextContentHTML(
  html,
  maxLength
) {
  // Remove HTML tags and replace dots with dots followed by a space
  let content = html.replace(/<[^>]*>/g, '').replace(/\./g, '. ');

  // Remove extra whitespaces
  content = content.replace(/\s+/g, ' ').trim();

  if (html.length >= maxLength) {
    // Find the last space before maxLength
    const lastSpaceIndex = content.lastIndexOf(' ', maxLength);

    // Trim the content and add "..." if needed
    content = content.slice(0, lastSpaceIndex) + '..';
  } else {
    content = content.slice(0, maxLength);
  }

  return content;
};
