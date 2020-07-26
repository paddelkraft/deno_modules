import { PromptWriter } from "./promptWriter.ts";
import { PromptReader } from "./promptReader.ts";

export async function writeToPrompt(
  text = "",
  stdout = new PromptWriter(),
) {
  return await stdout.write(text);
}

export async function getInputFromPrompt(stdin = new PromptReader()) {
  return await stdin.read();
}

export async function ask(
  question = "",
  _getInputFromPrompt = getInputFromPrompt,
  _writeToPrompt = writeToPrompt,
) {
  await _writeToPrompt(`${question} `);
  const answer = await _getInputFromPrompt();
  return answer;
}
