import { assertEquals } from "./../test_deps.ts";
import { PromptReader } from "./../src/promptReader.ts";

Deno.test({
  name: "PromptReader - it should get a value from the user and return it",
  ignore: true,
  async fn() {
    const promptReader = new PromptReader();
    const result = await promptReader.read();
    const expectedResult = "Kalle";
    assertEquals(result, expectedResult);
  },
});
