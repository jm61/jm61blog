---
title: "Find equality between 2 randoms int"
date: "2022-11-23"
updated: "2022-11-23"
categories: 
  - "golang"
coverImage: "/images/goLogo.png"
coverWidth: 50%
coverHeight: 6
excerpt: Example of code using math/rand, flag and time.
---

```go

```go
package main

import (
	"flag"
	"fmt"
	"math/rand"
	"time"
)

func randInt() int {
	seed := time.Now().UnixNano()
	rnd := rand.New(rand.NewSource(seed))
	return rnd.Intn(*rounds)
}

var rounds = flag.Int("rounds", 10, "number of rounds to run")

func main() {
	flag.Parse()
	start := time.Now()
	for {
		rnd1 := randInt()
		fmt.Println(rnd1)
		rnd2 := randInt()
		fmt.Println(rnd2)
		time.Sleep(100 * (time.Millisecond))
		if rnd1 == rnd2 {
			fmt.Printf("rnd1: %d == rnd2: %d EQUALITY!\n", rnd1, rnd2)
			break
		} else {
			fmt.Println("Not equal")
		}
	}
	elapsed := time.Since(start)
	fmt.Printf("Elapsed Time: %.2f sec\n", elapsed.Seconds())
	fmt.Println("Number of rounds: ", *rounds)
}
```
