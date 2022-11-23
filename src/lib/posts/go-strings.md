---
title: "Example of use with io,os,strings packages."
date: "2022-11-22"
updated: "2022-11-22"
categories: 
  - "golang"
coverImage: "/images/goLogo.png"
coverWidth: 50%
coverHeight: 6
excerpt: Example of use with io,os,strings packages.
---

```go
package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

var f = fmt.Printf

func main() {
	for _, fname := range os.Args[1:] {
		file, err := os.Open(fname)
		if err != nil {
			fmt.Fprintln(os.Stderr, err)
			continue
		}
		if strings.Split(fname, ".")[1] != "txt" {
			fmt.Fprintln(os.Stderr, "Invalid file type")
			os.Exit(1)
		}
		fi, err := os.Stat(fname)
		if err != nil {
			fmt.Fprintln(os.Stderr, err)
			os.Exit(1)
		}
		size := fi.Size()
		f("File size: |%4d bytes|\n", size)
		if size == 0 {
			fmt.Fprintln(os.Stderr, "File is empty")
			os.Exit(1)
		}
		/* data, _ := io.ReadAll(file)
		f("File data: |%d|%4T\n", len(data), data)
		if _, err := io.Copy(os.Stdout, file); err != nil {
			fmt.Fprintln(os.Stderr, err)
			continue
		} */
		f("\n")

		var lc, wc, cc int
		scan := bufio.NewScanner(file)
		for scan.Scan() {
			s := scan.Text()
			wc += len(strings.Fields(s))
			lc++
			cc += len(s)
		}
		f("Lines: %4d|\t Words: %4d \tChars: %4d\n", lc, wc, cc)
		file.Close()
	}
}
```