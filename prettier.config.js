export default {
  // Use single quotes instead of double quotes
  singleQuote: true,

  // Include trailing commas where valid in ES5 (objects, arrays, etc.)
  trailingComma: 'all',

  // Print lines with a maximum length of 80 characters
  printWidth: 80,

  // Use 2 spaces for indentation
  tabWidth: 2,

  // Indentation with spaces (not tabs)
  useTabs: false,

  // Add semicolons at the end of statements
  semi: false,

  // Always include parentheses around arrow function arguments
  arrowParens: 'always',

  // Don't insert a space between function name and its opening parenthesis
  // e.g. `function foo() {}` not `function foo () {}`
  spaceBeforeFunctionParen: false,

  // Format code as JSON
  bracketSpacing: true,

  // Ensure that the file is formatted only if a config file exists
  requireConfig: true,

  // Keep quotes consistent when formatting (i.e., use single quotes for strings where possible)
  quoteProps: 'as-needed',

  // When the code is too long, break it at a reasonable point
  proseWrap: 'always',

  // Don't format the code within HTML files
  htmlWhitespaceSensitivity: 'ignore',

  // Specify whether to break the line at a certain point (default 80)
  lineBreak: 'lf', // Ensures line breaks are consistent across systems (Unix-style line breaks)

  // Prettier Ignore Directories (will not format files in these folders)
  ignore: ['node_modules/', 'build/'],
}
