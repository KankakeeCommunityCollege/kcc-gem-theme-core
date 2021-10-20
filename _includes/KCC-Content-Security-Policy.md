# `kcc.edu` Content-Security-Policy

```
default-src 'self';
script-src 'self'
script-src 
script-src 'https://cse.google.com/adsense/search/async-ads.js'
script-src 'https://cse.google.com/cse.js?cx=006320264078644364913:sy48bet-lr8'
script-src 'https://use.typekit.net'
script-src 'https://fonts.gstatic.com'
script-src 'https://www.google.com'
script-src 'https://apis.google.com/js/api.js'
script-src 'https://www.google.com/cse/static/element/cc267ab8871224bd/cse_element__en.js?usqp=CAI%3D'
script-src 'https://www.google.com/cse/static/element/cc267ab8871224bd/default+en.css'
script-src 'https://www.google.com/cse/static/style/look/v4/default.css'
```

```html
---
csp: >
  default-src 'self';
  script-src 'self'
  script-src 
  script-src 'https://cse.google.com/adsense/search/async-ads.js'
  script-src 'https://cse.google.com/cse.js?cx=006320264078644364913:sy48bet-lr8'
  script-src 'https://use.typekit.net'
  script-src 'https://fonts.gstatic.com'
  script-src 'https://www.google.com'
  script-src 'https://apis.google.com/js/api.js'
  script-src 'https://www.google.com/cse/static/element/cc267ab8871224bd/cse_element__en.js?usqp=CAI%3D'
  script-src 'https://www.google.com/cse/static/element/cc267ab8871224bd/default+en.css'
  script-src 'https://www.google.com/cse/static/style/look/v4/default.css'
---
<meta http-equiv="Content-Security-Policy"
      content="{{ page.csp }}">
```

default-src 'self';
script-src 'self'
script-src 'https://cse.google.com/adsense/search/async-ads.js'
script-src 'https://cse.google.com/cse.js?cx=006320264078644364913:sy48bet-lr8'
script-src 'https://use.typekit.net'
script-src 'https://fonts.gstatic.com'
script-src 'https://www.google.com'
script-src 'https://apis.google.com/js/api.js'
script-src 'https://www.google.com/cse/static/element/cc267ab8871224bd/cse_element__en.js?usqp=CAI%3D'
script-src 'https://www.google.com/cse/static/element/cc267ab8871224bd/default+en.css'
script-src 'https://www.google.com/cse/static/style/look/v4/default.css'