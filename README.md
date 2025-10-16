# Workflow repo for the CA

### Installing

1. Clone the repo:

```bash
git clone https://github.com/mamf92/workflow-repo-ca.git
```

2. Install the dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add the required environment variables (see below).

### Environment Variables

Copy `.env.example` to `.env` and update with your values:

```
TEST_USER_EMAIL=your-email@stud.noroff.no
TEST_USER_PASSWORD=your-password
```

### Running

To run the app in development mode with Tailwind CSS watch mode:

```bash
npm run dev
```

To start the development server:

```bash
npm start
```

The app will be available at `http://localhost:5500`

## Testing

### Unit Tests (Vitest)

Run unit tests:

```bash
npm run vitest
```

### End-to-End Tests (Playwright)

Run Playwright tests in UI mode:

```bash
npm run playwright:ui
```

Run Playwright tests in headed mode:

```bash
npm run playwright:headed
```

View the Playwright test report:

```bash
npm run playwright:report
```

## Code Quality

### Pre-commit hook

This project uses Husky for Git hooks. A pre-commit hook wil automatically run linting and formatting on staged files.

### Linting

Run ESLint:

```bash
npm run lint
```

### Formatting

Format code with Prettier:

```bash
npm run format
```
