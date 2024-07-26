import { decode, encode } from "../src/main";

describe("Decode", function () {
  it("should decode hello world", function () {
    const morse = decode(".... . .-.. .-.. --- * .-- --- .-. .-.. -..");
    expect(morse).toBe("hello world");
  });
});
describe("Encode", function () {
  it("should encode hello world", function () {
    const alfabet = encode("hello world");
    expect(alfabet).toBe(".... . .-.. .-.. --- * .-- --- .-. .-.. -..");
  });
});
