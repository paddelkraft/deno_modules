import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import {
  writeToPrompt,
  getInputFromPrompt,
  ask,
} from "./../src/promptUtils.ts";

Deno.test({
  name:
    "PromptUtils - it should be possible get a value from the user and return it",
  ignore: true,
  async fn() {
    const result = await getInputFromPrompt();
    console.log("result", result);
    const expectedResult = "Kalle";
    assertEquals(result, expectedResult);
  },
});

Deno.test("PromptUtils - it should output to stdout and return the value", async () => {
  const result = await writeToPrompt("Kalle");
  console.log("result", result);
  const expectedResult = "Kalle";
  assertEquals(result, expectedResult);
});

Deno.test({
  name:
    "PromptUtils - it should be possible to ask a question and get an answer back",
  ignore: true,
  async fn() {
    const result = await ask("What is your name?");
    const expectedResult = "Kalle";
    assertEquals(result, expectedResult);
  },
});

async function returnOlle() {
  return "Olle";
}

async function noWrite(text: string = "") {
  return text;
}

Deno.test("PromptUtils - it should be possible to inject functions for input and output in ask funktion", async () => {
  const result = await ask("What is your name?", returnOlle, noWrite);
  const expectedResult = "Olle";
  assertEquals(result, expectedResult);
});
