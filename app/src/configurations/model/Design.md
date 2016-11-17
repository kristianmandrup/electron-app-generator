# Design

- first normalize object into a flat form

```js
analysis: {
  questions: {
    x: {

    },
    y: {
      z: {
        name: 'xk'
      }
    },
    v: [
    {
      name: 'v'
    },
    {
      name: 'x'
    }   
    ]
  }
}
```

Normalized into:

```js
analysis: {
  x: [{

  }],
  'y.z': [{
    name: 'hello
  }]
  v: [
  ]
}
}
```

Then iterate each key of `analysis` and ask questions using prompt.