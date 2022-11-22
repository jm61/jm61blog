---
title: "Golang snippets"
date: "2022-11-22"
updated: "2022-11-22"
categories: 
  - "golang"
coverImage: "/images/goLogo.png"
coverWidth: 16
coverHeight: 9
excerpt: Collection of useful bits of go code.
---

<svelte:head>
	<title>Golang</title>
</svelte:head>

# Golang Snippets <img src="/images/goLogo.png" alt="jm61 photo" style="width:20%;border-radius:1rem;box-shadow:10px 10px 20px rgba(0,0,0,.5);" />

* Example of use with io,os,strings packages.
```go
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
		data, _ := io.ReadAll(file)
		f("File data: |%d|%4T\n", len(data), data)
		if _, err := io.Copy(os.Stdout, file); err != nil {
			fmt.Fprintln(os.Stderr, err)
			continue
		}
		file.Close()
	}
}
```







