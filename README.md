# Jasmine HTTP status code matcher

## Setup

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

## Usage

Expect a status code to be a given status code

```
// res.statusCode = 204
expect(res.statusCode).toBeStatusCode(404);
```

would output:

```
Expected 204 (No Content) to be 404 (Not Found)
```

Also works with .not like this:

```
// res.statusCode = 204
expect(res.statusCode).not.toBeStatusCode(404);
```

would output:

```
Expected 204 (No Content) not to be 404 (Not Found)
```

