# LiveQueryURL
Add, update or delete paramaters from the browser query live without any page reload. This package uses the `pushState` method.

![image description](https://i.ibb.co/jRCKdTs/example.gif)

This package is useful for applications that don't require page reloads, but you want to remember the user's last location. It will automatically add **or** update if you add a query.

## Installation
You can install this package with npm.
```shell
npm i livequeryurl
```

## Example

```html
<button id="add-button">Add key</button>
<button id="update-button">Update key</button>
<button id="remove-button">Delete key</button>

<script>
// Highly recommended to call class after page load
window.addEventListener('load', function() {

    let url = new LiveQueryURL() // Create new instance

    // Add
    document.getElementById('add-button').addEventListener('click', function() {

        url.addQuery('current-page', 'dashboard') // Add new param
        url.addQuery('page', 'buy') // Add new param
    })

    // Update
    document.getElementById('update-button').addEventListener('click', function() {

        url.addQuery('current-page', 'orders') // Update the param
    })

    // Remove
    document.getElementById('remove-button').addEventListener('click', function() {

        url.removeQuery('current-page') // Remove param
    })
})
</script>
```
## Methods

| Method                 | Purpose                     | Example                       |
|------------------------|-----------------------------|-------------------------------|
| `addQuery(key, value)` | Will add or update (the value of the key) a query  | `addQuery('page', 'dashboard')` |
| `removeQuery(key)` | Will remove the query key from the url | `removeQuery('page')` |
