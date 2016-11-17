# Reactive UI

Use `filter` function to control return values.

## User Interfaces and layouts

Along with the prompts, Inquirer offers some basic text UI.

Bottom Bar - `inquirer.ui.BottomBar`

This UI present a fixed text at the bottom of a free text zone. This is useful to keep a message to the bottom of the screen while outputting command outputs on the higher section.

```js
var ui = new inquirer.ui.BottomBar();
 
// pipe a Stream to the log zone 
outputStream.pipe(ui.log);
 
// Or simply write output 
ui.log.write('something just happened.');
ui.log.write('Almost over, standby!');
 
// During processing, update the bottom bar content to display a loader 
// or output a progress bar, etc 
ui.updateBottomBar('new bottom bar content');
```

## Reactive interface
Internally, Inquirer uses the JS reactive extension to handle events and async flows.

This mean you can take advantage of this feature to provide more advanced flows. For example, you can dynamically add questions to be asked:

```js
var prompts = new Rx.Subject();
inquirer.prompt(prompts);
 
// At some point in the future, push new questions 
prompts.onNext({ /* question... */ });
prompts.onNext({ /* question... */ });
 
// When you're done 
prompts.onCompleted();
And using the return value process property, you can access more fine grained callbacks:

inquirer.prompt(prompts).process.subscribe(
  onEachAnswer,
  onError,
  onComplete
);
```