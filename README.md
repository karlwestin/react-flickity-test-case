React-Flickity Test Case
====

This is a test case for the `react-flickity` npm module
The carousel breaks when adding elements on the front

To show:

```
npm i
npm start
```

Go to the page, press, 'add element' button, and the page breaks with the following error:

```
react-dom.development.js:15050 Uncaught DOMException: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.
    at insertBefore (http://localhost:4000/static/js/bundle.js:28345:22)
    at commitPlacement (http://localhost:4000/static/js/bundle.js:22412:13)
    at commitAllHostEffects (http://localhost:4000/static/js/bundle.js:23190:13)
    at HTMLUnknownElement.callCallback (http://localhost:4000/static/js/bundle.js:13837:14)
    at Object.invokeGuardedCallbackDev (http://localhost:4000/static/js/bundle.js:13876:16)
    at invokeGuardedCallback (http://localhost:4000/static/js/bundle.js:13733:27)
    at commitRoot (http://localhost:4000/static/js/bundle.js:23310:9)
    at performWorkOnRoot (http://localhost:4000/static/js/bundle.js:24312:42)
    at performWork (http://localhost:4000/static/js/bundle.js:24262:7)
    at batchedUpdates (http://localhost:4000/static/js/bundle.js:24381:9)
    at batchedUpdates (http://localhost:4000/static/js/bundle.js:15625:12)
    at dispatchEvent (http://localhost:4000/static/js/bundle.js:16716:5)
insertBefore @ react-dom.development.js:15050
commitPlacement @ react-dom.development.js:9117
commitAllHostEffects @ react-dom.development.js:9895
callCallback @ react-dom.development.js:542
invokeGuardedCallbackDev @ react-dom.development.js:581
invokeGuardedCallback @ react-dom.development.js:438
commitRoot @ react-dom.development.js:10015
performWorkOnRoot @ react-dom.development.js:11017
performWork @ react-dom.development.js:10967
batchedUpdates @ react-dom.development.js:11086
batchedUpdates @ react-dom.development.js:2330
dispatchEvent @ react-dom.development.js:3421
index.js:2177 The above error occurred in the <div> component:
    in div (at App.js:37)
    in div
    in FlickityComponent (at App.js:35)
    in div (at App.js:34)
    in App (at index.js:7)

Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://fb.me/react-error-boundaries to learn more about error boundaries.
__stack_frame_overlay_proxy_console__ @ index.js:2177
logCapturedError @ react-dom.development.js:9747
captureError @ react-dom.development.js:10540
commitRoot @ react-dom.development.js:10023
performWorkOnRoot @ react-dom.development.js:11017
performWork @ react-dom.development.js:10967
batchedUpdates @ react-dom.development.js:11086
batchedUpdates @ react-dom.development.js:2330
dispatchEvent @ react-dom.development.js:3421
react-dom.development.js:10994 Uncaught DOMException: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.
    at insertBefore (http://localhost:4000/static/js/bundle.js:28345:22)
    at commitPlacement (http://localhost:4000/static/js/bundle.js:22412:13)
    at commitAllHostEffects (http://localhost:4000/static/js/bundle.js:23190:13)
    at HTMLUnknownElement.callCallback (http://localhost:4000/static/js/bundle.js:13837:14)
    at Object.invokeGuardedCallbackDev (http://localhost:4000/static/js/bundle.js:13876:16)
    at invokeGuardedCallback (http://localhost:4000/static/js/bundle.js:13733:27)
    at commitRoot (http://localhost:4000/static/js/bundle.js:23310:9)
    at performWorkOnRoot (http://localhost:4000/static/js/bundle.js:24312:42)
    at performWork (http://localhost:4000/static/js/bundle.js:24262:7)
    at batchedUpdates (http://localhost:4000/static/js/bundle.js:24381:9)
    at batchedUpdates (http://localhost:4000/static/js/bundle.js:15625:12)
    at dispatchEvent (http://localhost:4000/static/js/bundle.js:16716:5)
performWork @ react-dom.development.js:10994
batchedUpdates @ react-dom.development.js:11086
batchedUpdates @ react-dom.development.js:2330
dispatchEvent @ react-dom.development.js:3421
```
