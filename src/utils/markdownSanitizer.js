const marked = require('marked');
const sanitizeHtml = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkdown(markdownContent) {
    const turndownService = new TurndownService()

    // 1. Convert markdown to html
    const convertedHtml = marked.parse(markdownContent);
    // console.log("converted html", convertedHtml);

    // 2. Sanitize html
    const sanitizedHtml = sanitizeHtml(convertedHtml, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
    });

    // console.log("sanitized html", sanitizedHtml)

    // Convert the sanitize html back to markdown
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
    // console.log("sanitized markdown", sanitizeMarkdown);

    return sanitizedMarkdown;
};

const input = `
// # Hello World
// this is a markdown

// - something

// <script>alert(wohoo)</script>
// [link](www.google.com)
// `;
// sanitizeMarkdown(input);

module.exports = sanitizeMarkdown;