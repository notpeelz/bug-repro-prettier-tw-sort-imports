// expected order: whatever, clsx, blah, foo
import foo from "./foo";
import clsx from "clsx";
import whatever from "@lib/whatever";
import blah from "../blah";

const a = whatever();
const b = foo();
const c = blah();

export default function () {
  // expected order: relative w-full
  return <div className={clsx("w-full relative")} />;
}
