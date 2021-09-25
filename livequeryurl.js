/**
 * Package Name: LiveQueryURL
 * License: MIT
 * Made by: Noah Imamkhan
 * Version: 1.0.0
 * Github: https://github.com/s1129092/LiveQueryURL
*/

module.exports = class LiveQueryURL {

    addQuery(key, value) {
      var new_url = '?'
      var currentURL = (document.URL)
      var new_key = `${key}=${value}`
      var existing_params;
      var new_key_exists = false

      // check if URl has existing query string
      if (currentURL.includes('?')) {
          var query = currentURL.split('?')[1]
          existing_params = query.split('&')
      }

      // Add new to existing params and/or update the key if it exists
      if (existing_params && existing_params.length > 0) {

          // Loop through each param to check if key already exists
          existing_params.forEach((param, index) => {

            var existing_param_key = param.split('=')[0]

            if (param.startsWith(key) && existing_param_key.length === key.length) {
                  new_key_exists = true

                  param = new_key
              }

              if (index == 0) {
                  new_url += param
              } else {

                  new_url += `&${param}`
              }
          })
      }

      // Add new key if it doesnt exist and no params exists
      if (!new_key_exists) {

          if (currentURL.includes('?') && currentURL.split('?')[1]) {
              new_url += `&${new_key}`
          } else if (currentURL.includes('?') && !currentURL.split('?')[1]) {
              new_url += `${new_key}`
          } else {
              new_url += `${new_key}`
          }
      }
      // Push new url to browser
      window.history.pushState('data', 'F', new_url);
    }
  }


