# less2tss

A simply less to tss converter.

Uses [less](http://lesscss.org/) and [css2tss](https://github.com/p/csstss)
Alternative to (and forked from) [ltss](https://github.com/dbankier/ltss)

## CLI Usage

Install

```
[sudo] npm install -g ltss
```

then

```
less2tss [filename.less]
```

converted file will be return to stdout

```
less2tss [filename.less] filename.tss
```

converted file will be written to the output file provided


## Library Usage

the following commands are available: `compileString(string, callback)`, `compileFile(filename, callback)`,
`writeFile(source, target, callback)`

