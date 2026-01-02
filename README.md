# advent-of-code-2025

[https://adventofcode.com/2025](https://adventofcode.com/2025)

This repo is my attempt at solving the advent of code puzzle of 2025 to earn all the stars using typescript :)

| Su | Mo | Te | We | Th | Fr | Sa |
| :-- | :--: | :--: | :--: | :--: | :--: | :--: |
| 30 | [01](./1/) | [02](./2/) | [03](./3/) | [04](./4/) | [05](./5/) | [06](./6/) |
| [07](./7/) | [08](./8/) | [09](./9/) | [10](./10/) | [11](./11/) | [12](./12/) | 13 |
| 14 | 15 | 16 | 17 | 18 | 19 | 20 |
| 21 | 22 | 23 | 24 | 25 | 26 | 27 |
| 28 | 29 | 30 | 31 | 01 | 02 | 03 |

## How to contribute

Fork this repo and test using the following:

Tested with Node v22.11.0

### Using ts-node via cli

```sh
npx ts-node /1/src/app.ts
```

or using transpile-only

```sh
npx ts-node-transpile-only src/app.ts
```

### Using vscode launch.json

It is also possible to test using vscode after running npm install in the current Day's working directory and creating a `.vscode/launch.json` at the root of the project directory.
>remember to change `cwd` to the day you want to test.

`.vscode/launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "cwd": "${workspaceFolder}\\1",
      "console": "integratedTerminal",
      "runtimeArgs": ["--nolazy", "-r", "ts-node/register/transpile-only"],
      "args": ["./src/app.ts"],
    }
  ]
}
```

then `npm install` from within the directory

  ```sh
  cd 1
  npm install
  ```
