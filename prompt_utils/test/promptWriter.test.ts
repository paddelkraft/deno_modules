import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { PromptWriter } from "./../src/promptWriter.ts";

Deno.test("promptWriter - it should to write to prompt and return value printed", async () => {
  const promptWriter = new PromptWriter();
  const result = await promptWriter.write("Kalle");
  const expectedResult = "Kalle";
  assertEquals(result, expectedResult);
});
