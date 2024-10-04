## Installation and Project Launch

```
git clone https://github.com/David-Gasparian/TechTrove.git - clone the project
cd TechTrove - open project directory
npm install - install dependencies
npm run start:dev or npm run start:vite:dev - launch the server + frontend project in dev mode
```

---

## Scripts

-   `npm run start` - Launch the frontend project on webpack dev server
-   `npm run start:vite` - Launch the frontend project on vite
-   `npm run start:dev` - Launch the frontend project on webpack dev server + backend
-   `npm run start:vite:dev` - Launch the frontend project on vite + backend
-   `npm run start:json:serve` - Launch the backend server
-   `npm run build:prod` - Build in prod mode
-   `npm run build:dev` - Build in dev mode (not minified)
-   `npm run lint:ts` - Check ts files with linter
-   `npm run lint:ts:fix` - Fix ts files with linter
-   `npm run prettier` - Format the codebase using Prettier to ensure consistent code style
-   `npm run lint:scss` - Check scss files with style linter
-   `npm run lint:scss:fix` - Fix scss files with style linter
-   `npm run test:unit` - Run unit tests with jest
-   `npm run test:unit:coverage` - Run unit tests with jest and generate coverage report
-   `npm run test:ui` - Run screenshot tests with loki
-   `npm run test:ui:ok` - Approve new screenshots
-   `npm run test:ui:ci` - Run screenshot tests in CI
-   `npm run test:ui:report` - Generate a full report for screenshot tests
-   `npm run test:ui:json` - Generate a json report for screenshot tests
-   `npm run test:ui:html` - Generate an HTML report for screenshot tests
-   `npm run storybook` - Launch Storybook
-   `npm run storybook:build` - Build Storybook
-   `npm run prepare` - Pre-commit hooks
-   `npm run generate:slice` - Script for generating FSD slices

---

## Project Architecture

The project is written according to the Feature Sliced Design methodology.

Documentation link - [Feature Sliced Design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Working with Translations

The project uses the i18next library for handling translations.
Translation files are stored in `public/locales`.

For convenience, we recommend installing the plugin for WebStorm/VSCode.

i18next documentation - [https://react.i18next.com/](https://react.i18next.com/)

---

## Tests

The project includes 4 types of tests:

1. Regular unit tests with jest - `npm run test:unit`
2. Component tests with React Testing Library - `npm run test:unit`
3. Screenshot testing with loki - `npm run test:ui`
4. e2e testing with Cypress - `npm run test:e2e`

More details about tests - [Testing documentation](/docs/tests.md)

---

## Linting

The project uses eslint for checking TypeScript code and stylelint for checking style files.

To strictly enforce main architectural principles, we use my custom eslint plugin _eslint-plugin-feature-slice-import-manager_, which contains 3 rules:

1. check-imports - prohibits using absolute imports within a single module
2. layer-imports - checks the correct use of layers according to FSD (e.g., widgets cannot be used in features and entities)
3. public-api-imports - allows imports from other modules only from the public API

##### Running Linters

-   `npm run lint:ts` - Check ts files with linter
-   `npm run lint:ts:fix` - Fix ts files with linter
-   `npm run prettier` - Format the codebase using Prettier to ensure consistent code style
-   `npm run lint:scss` - Check scss files with style linter
-   `npm run lint:scss:fix` - Fix scss files with style linter

---

## Storybook

Story cases are described for each component in the project.
Server requests are mocked using storybook-addon-mock.

The story file is created next to the component with the extension .stories.tsx.

You can start Storybook with the command:

-   `npm run storybook`

More about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```

---

## Project Configuration

For development, the project includes 2 configs:

1. Webpack - ./config/build
2. vite - vite.config.ts

Both bundlers are adapted for the main features of the application.

All configurations are stored in /config:

-   /config/babel - babel
-   /config/build - webpack configuration
-   /config/jest - test environment configuration
-   /config/storybook - Storybook configuration

In the `scripts` folder, there are various scripts for refactoring/simplifying code writing/, generating reports, etc.

---

## CI Pipeline and Pre-Commit Hooks

The configuration for GitHub Actions is located in /.github/workflows.
In CI, all types of tests are run, along with project and Storybook builds, and linting.

Pre-commit hooks check the project with linters; the config is in /.husky.

---

### Working with Data

Data interaction is handled with redux toolkit.
Reusable entities should be normalized with EntityAdapter whenever possible.

Requests to the server are made using [RTK Query](/src/shared/api/rtkApi.ts).

For asynchronous reducer loading (to avoid bundling them all together), [useAsyncReducer](/src/shared/lib/hooks//useAsyncReducer.ts) is used.

---

### Working with feature flags

The use of feature flags is allowed only through the toggleFeatures helper.

It takes an object with options:

{ 
    name: the name of the feature flag,
    on: a function that will be executed when the feature is turned ON,
    off: a function that will be executed when the feature is turned OFF
}

To automatically remove a feature, use the remove-feature.ts script,
which accepts 2 arguments:
1. The name of the feature flag to be removed
2. The state (on/off)

---
## Entities

-   [Article](/src/entities/Article)
-   [Comment](/src/entities/Comment)
-   [Country](/src/entities/Country)
-   [Currency](/src/entities/Currency)
-   [Notification](/src/entities/Notification)
-   [Profile](/src/entities/Profile)
-   [Rating](/src/entities/Rating)
-   [User](/src/entities/User)

## Features

-   [AddCommentForm](/src/features/AddCommentForm)
-   [ArticleRating](/src/features/ArticleRating)
-   [ArticleViewSwitcher](/src/features/ArticleViewSwitcher)
-   [AuthByUsername](/src/features/AuthByUsername)
-   [AvatarDropdown](/src/features/AvatarDropdown)
-   [EditableProfileCard](/src/features/EditableProfileCard)
-   [FilterArticles](/src/features/FilterArticles)
-   [LangSwitcher](/src/features/LangSwitcher)
-   [NotificationButton](/src/features/NotificationButton)
-   [RecommendedArticlesList](/src/features/RecommendedArticlesList)
-   [SaveScrollPosition](/src/features/SaveScrollPosition)
-   [ThemeSwitcher](/src/features/ThemeSwitcher)

---

## Contact

For any inquiries, please contact Davit at dtgasparyan@gmail.com.
