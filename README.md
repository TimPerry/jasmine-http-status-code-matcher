# 

# Setup

Install via npm:

```
npm install --save-dev jasmine-node-http-status-code-matcher
```

import in node:

```
var customMatchers = require('jasmine-node-http-status-code-matcher');
```

tell jasmine to use the matchers:

```
jasmine.addMatchers(customMatchers);
```

# Usage

Expect a status code to be a given status code

```
expect(res.statusCode).toBeStatusCode(401);
```

Also works with .not like this:

```
expect(res.statusCode).not.toBeStatusCode(401);
```
