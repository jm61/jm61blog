---
title: "Optional chaining (?.)"
date: "2022-08-22"
updated: "2022-08-22"
categories: 
  - "javascript"
coverImage: "/images/optionalChaining.jpg"
coverWidth: 50%
coverHeight: 9
excerpt: The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid. 
---



The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist. 