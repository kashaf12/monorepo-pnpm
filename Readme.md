# Monorepo with PNPM

This repository is a monorepo managed with PNPM. It contains two packages: `bugs` and `bugfixes`.

## Packages

### `bugs`

This package exports a list of bugs.

- **Main file:** `packages/bugs/index.js`
- **Start script:** `packages/bugs/start.js`

#### Example

```js
import { bugs } from "bugs";

console.log(bugs);
```

### `bugfixes`

This package imports the `bugs` package and creates fixes for each bug.

- **Main file:** `packages/bugfixes/index.js`

#### Example

```js
import { fixes } from "bugfixes";

console.log(fixes);
```

## Scripts

- **Start all packages:** `pnpm run start`
- **Start the `bugs` package:** `pnpm run start:bugs`
- **Start packages starting with `bug`:** `pnpm run start:bug`

## Installation

To install the dependencies, run:

```bash
pnpm install
```

## Usage

To start the project, run:

```bash
pnpm run start
```

This will start all packages in parallel.