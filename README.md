# Cloner

[![Build Status](https://travis-ci.org/abouthiroppy/cloner.svg?branch=master)](https://travis-ci.org/abouthiroppy/cloner)

### Common files management system

## Install
`$ npm insall -g file-cloner`

## Setup
You create `~/.cloner` and `~/.cloner/default`.   
Common files in `.cloner` are used by Cloner.   
When you want to distribute in a scene, you create `~/.cloner/hoge`.

## Usage
```
e.g.
~/.cloner   ᐅ tree -a
.
├── default
│   └── .editorconfig
├── js
│   ├── .eslintignore
│   ├── .eslintrc
│   └── .travis.yml
└── ruby
    └── .gitignore

```

### cloner init
```
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
├── .eslintignore
├── .eslintrc
└── .travis.yml
```

### cloner list
```
~/Desktop/test   ᐅ cloner list
./cloner
├─┬ default
│ └── .editorconfig
├─┬ js
│ ├── .eslintignore
│ ├── .eslintrc
│ ├── .travis.yml
│ └── test
└─┬ ruby
  └── .gitignore
```
