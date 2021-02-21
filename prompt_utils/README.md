# Prompt Utils

Link to module: [Prompt Utils](https://raw.githubusercontent.com/tommardh/deno_modules/master/prompt_utils/mod.ts)

These functions makes it a bit easier to work with simple input and output from stdin and to stdout.
## Documentation

### writeToPrompt function

> `async function writeToPrompt(text: string): string`

Write output on stdout and returns the text written.

### getInputFromPrompt

> `async function getInputFromPrompt(): string`

Reads input from stdin and returns that value.

### ask

> `async function ask(text: string): string`

Writes text on stdout and reads input from stdin and returns that value. As second and third parameter it is possible to inject functions to use instead of `getInputfromPrompt` and/or `writeToPrompt` if wanted.

## Usage

```typescript
import {
  writeToPrompt,
  ask,
} from "./../deps.ts";

export class Hello {
  private getUserInput: Function;
  private print: Function;

  constructor(print = writeToPrompt, getUserInput = ask) {
    this.getUserInput = getUserInput;
    this.print = print;
  }

  public async execute() {
    const name = await this.getUserInput("What is your name?");
    const greeting = this.createGreeting(name);
    const result = await this.print(`${greeting}\n`);
    return result;
  }

  private createGreeting(name: string) {
    const greeting = `Hello, ${name}, nice to meet you!`;
    return greeting;
  }
}
```

By using this module testing of input and output froam stdin and to stdout is simplified. See example below:

```typescript
async function returnOlle() {
  return "Olle";
}

async function noWrite(text = "") {
  return text;
}

Deno.test("PromptUtils - it should be possible to inject functions for input and output in ask funktion", async () => {
  const result = await ask("What is your name?", returnOlle, noWrite);
  const expectedResult = "Olle";
  assertEquals(result, expectedResult);
});
```

## References

- [My Deno Modules Read Me File](https://github.com/tommardh/deno_modules)
