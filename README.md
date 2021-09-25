# LiveQueryURL
Update the browser query live without any page reload. This package uses the `pushState` method.

![image description](https://i.ibb.co/84bZL3k/example.gif)

This package is useful for applications that don't require page reloads, but you want to remember the user's last location. It will automatically add **or** update if you add a query.

## Installation
You can install this package with npm.
```bash
npm i livequeryurl
```

## Example

```html

<button id="button">Update url without reloading!</button>

<script>
    document.getElementById('button').addEventListener('click', function() {

        var url = new LiveQueryURL(); // Initialize
        url.addQuery('current-page', 'dashboard') // Param "current-page=dashboard"
        url.addQuery('sub-page', 'orders') // Param "sub-page=orders"
    })
</script>
```
## Methods

| Method                 | Purpose                     | Example                       |
|------------------------|-----------------------------|-------------------------------|
| `addQuery(key, value)` | Will add or update a query  | addQuery('page', 'dashboard') |

