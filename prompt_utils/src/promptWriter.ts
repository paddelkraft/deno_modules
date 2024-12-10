export class PromptWriter {
  private _stdout = Deno.stdout;

  constructor(stdout = Deno.stdout) {
    this._stdout = stdout;
  }

  public async write(text: string) {
    await this._stdout.write( new TextEncoder().encode(text));
    return text;
  }
}

