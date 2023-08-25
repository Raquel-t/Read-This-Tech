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
};