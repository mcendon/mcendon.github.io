# Code Quality Setup

This project uses ESLint, TypeScript, Prettier, Husky, and lint-staged to maintain code quality.

## Tools Configured

### ESLint

- **Purpose**: Linting JavaScript, TypeScript, and Astro files
- **Configuration**: `eslint.config.js` (flat config format)
- **Plugins**:
  - `@typescript-eslint` for TypeScript support
  - `eslint-plugin-astro` for Astro file support
  - `eslint-plugin-jsx-a11y` for accessibility checks

### Prettier

- **Purpose**: Code formatting
- **Configuration**: `.prettierrc.json`
- **Plugin**: `prettier-plugin-astro` for Astro file formatting

### Husky

- **Purpose**: Git hooks management
- **Configuration**: `.husky/` directory
- **Hook**: `pre-commit` runs lint-staged before commits

### lint-staged

- **Purpose**: Run linters on staged files only
- **Configuration**: `.lintstagedrc.json`
- **Actions**:
  - Runs ESLint with auto-fix on JS/TS/Astro files
  - Runs Prettier on JSON/MD/MDX files

## Available Scripts

```bash
# Run ESLint on all files
npm run lint

# Run ESLint with auto-fix
npm run lint:fix

# Format all files with Prettier
npm run format

# Check formatting without modifying files
npm run format:check
```

## How It Works

1. **During Development**: Run `npm run lint` or `npm run format` manually when needed
2. **Before Commit**: Husky automatically runs lint-staged, which:
   - Lints and auto-fixes staged JS/TS/Astro files
   - Formats staged JSON/MD/MDX files
   - Only allows commit if all checks pass

## Setup for New Contributors

The setup is automatic! When you run `npm install`, the `prepare` script will:

1. Install Husky
2. Set up the pre-commit hook

No additional configuration needed.

## Customizing Rules

### ESLint Rules

Edit `eslint.config.js` to modify linting rules:

```javascript
rules: {
  '@typescript-eslint/no-unused-vars': ['warn', {
    argsIgnorePattern: '^_',
    varsIgnorePattern: '^_'
  }],
  '@typescript-eslint/no-explicit-any': 'warn',
  // Add your custom rules here
}
```

### Prettier Options

Edit `.prettierrc.json` to change formatting preferences:

```json
{
	"semi": true,
	"singleQuote": true,
	"tabWidth": 2,
	"useTabs": true
}
```

## Ignoring Files

- **ESLint**: Add patterns to the `ignores` array in `eslint.config.js`
- **Prettier**: Add patterns to `.prettierignore`

## Troubleshooting

### Pre-commit hook not running

```bash
# Reinstall Husky
npm run prepare
```

### Linting errors on commit

```bash
# Fix automatically
npm run lint:fix

# Or format files
npm run format
```

### Skip hooks (not recommended)

```bash
git commit --no-verify
```
