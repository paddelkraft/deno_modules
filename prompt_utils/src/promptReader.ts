export class PromptReader {
  private _stdin: any;

  constructor(stdin = Deno.stdin) {
    this._stdin = stdin;
  }

  public async read() {
    const buf = new Uint8Array(1024);
    const n = <number> await this._stdin.read(buf);
    const answer = new TextDecoder().decode(buf.subarray(0, n));
    return answer.trim();
  }
}
