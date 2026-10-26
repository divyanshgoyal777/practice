const { test } = require("../test");

// Write a function called simplifyPath(path) that returns the canonical form of an absolute Unix-style path.

// Rules:
// - Multiple consecutive / characters count as one.
// - A . component means the current directory and is ignored.
// - A .. component moves up one directory, if possible.
// - Directory names remain unchanged.
// - The result starts with / and has no trailing slash unless it is the root /.


function simplifyPath(path) {
    const stack = [];
    let word = "";

    for (let i = 0; i <= path.length; i++) {
        if (path[i] === "/" || i === path.length) {
            if (word === "..") {
                stack.pop();
            } else if (word !== "" && word !== ".") {
                stack.push(word);
            }
            word = "";
        } else {
            word += path[i];
        }
    }

    let result = "";

    for (const folder of stack) {
        result += "/" + folder;
    }

    return result || "/";
}

test(simplifyPath("/home/"), "/home"); // "/home"
test(simplifyPath("/a/./b/../../c/"), "/c"); // "/c"
test(simplifyPath("/../"), "/"); // "/"
test(simplifyPath("/home//foo/"), "/home/foo"); // "/home/foo"
test(simplifyPath("/a/b/../../../c"), "/c"); // "/c"
test(simplifyPath("/a/../../b/../c//"), "/c"); // "/c"
test(simplifyPath("/.../a/../b"), "/.../b"); // "/.../b"
test(simplifyPath("/a/./b/./c/"), "/a/b/c"); // "/a/b/c"
test(simplifyPath("/"), "/"); // "/"