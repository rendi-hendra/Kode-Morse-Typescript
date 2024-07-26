import { Alfabets, sandiMorse } from "./data";

export function decode(morse: string): string {
  return morse.split(" ").map((code) => {if (code === "") return "";const index = sandiMorse.indexOf(code);return index !== -1 ? Alfabets[index] === "*" ? " " : Alfabets[index] : "";}).join("");
}

export function encode(alfabet: string): string {
  return alfabet.trim().toLowerCase().split("").map((alfabet) => alfabet == " " ? "*" : sandiMorse[Alfabets.indexOf(alfabet.toLowerCase())]).join(" ");
}
