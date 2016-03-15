# Cloner

### Common files management system

## Setup
You create `~/.cloner` and `~/.cloner/default`.   
Common files in `.cloner` are used by Cloner.   
When you want to distribute in a scene, you create `~/.cloner/hoge`.

## Usage
### cloner init
```
e.g.
~/.cloner   ᐅ tree -a
 .
 ├── default
 │   └── .editorconfig
 ├── js
 │   ├── .eslintrc
 │   └── gulpfile.js
 └── ruby
     └── .gitignore

~/Desktop/test   ᐅ cloner init   
if you don't specify filename, cloner fetches `~/.cloner/default`.

  ~/Desktop/test   ᐅ tree -a
  .
  └── .editorconfig

~/Desktop/test   ᐅ cloner init js
`default` and `js` are called by cloner.

 ~/Desktop/test   ᐅ tree -a
.
├── .editorconfig
├── .eslintrc
└── gulpfile.js

```

### cloner list
```
$ cloner list
```

## [TODO]
- [ ] test
- [ ] setup ci
