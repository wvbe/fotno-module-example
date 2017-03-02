# fotno-module-example

This repository is an example fotno module intended as a tutorial/boilerplate for writing your own fotno module.

## requirements to any fotno module

- A package.json with at least a name, version number, main and preferably a description
- An entry javascript file such as `index.js`, which exports a callback that uses the `fotno` object to register
  whatever it is you want your module to do.

## how to install any fotno module

```
$ git clone git@bitbucket.org:wvbe/fotno-module-example
$ fotno module --add ./fotno-module-example
```

To then run the command added in this example module:

```
$ fotno example
```

## further reading

- [fotno](http://bitbucket.org/wvbe/fotno), the host executable
- [ask-nicely](http://github.com/wvbe/ask-nicely), the lib for registering (child) commands, options and parameters
- [speak-softly](http://github.com/wvbe/speak-softly), the lib for rendering pretty console output