module.exports = {
  format_date: (date) => {
    if (!date) {
      console.error("Date is undefined or null.");
      return ""; // or some default value
    }
    return date.toLocaleDateString();
  },

  truncate_text: (text, length = 150) => {
    // Truncate text and append '...' if it exceeds the specified length
    if (text.length > length) {
      return text.substring(0, length) + '...';
    }
    return text;
  },

  get_emoji: (mood) => {
    switch (mood) {
      case 'happy':
        return `<span for="img" aria-label="happy">😊</span>`;
      case 'sad':
        return `<span for="img" aria-label="sad">😢</span>`;
      case 'thoughtful':
        return `<span for="img" aria-label="thinking">🤔</span>`;
      case 'excited':
        return `<span for="img" aria-label="excited">🥳</span>`;
      default:
        return `<span for="img" aria-label="neutral">😐</span>`;
    }
  },
};