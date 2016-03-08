# Javascript ES6 ready frontend starter template

esixstarter is a simple front-end starter template for building javascript applications using ECMAScript6 features.

## Features:

- TDD-ready environment.
- ECMAScript6 support.
- Livereload! Browser automatically refresh on changes.
- LESS support.   
- Javascript & CSS minification.
- Javascript linting.
- CSS Autoprefixer.

## Quick Start
1. Download the zip project <a href="#">here</a>

2. Or clone this git repo: <pre><code>git clone https://github.com/fradot/esixstarter.git</code></pre>

##### Configure your project
Configure your project using the esixstarter-config.json file:

<pre><code>
{
  "name": "-your project name-",
  "description": "-your project description goes here-",
  "dirs": {
      "test": "test",
      "dist": "dist",
      "src": "src"
    },
  "version": "1.0.0",
  "author" : "-author fullname-"
}
</code></pre>

##### Install dependencies & Start developing

Install project dependencies from command line:
<pre><code>
npm install
</code></pre>

Run gulp command and start developing:
<pre><code>
gulp
</code></pre>

By default gulp will start a new web server at http://localhost:8080 and karma for test execution.

Javascript code will be transpiled to EcmaScript5.

##### Build project
Build your project using the build command:
<pre><code>gulp build</code></pre>

The above command will produce a 'dist' folder.

In order to produce a production-ready version of the project the argument 'production' has to be appended to the build command:
<pre><code>gulp build --production</code></pre>

## License

The MIT License (MIT)

Copyright (c) 2016 Francesco Tucceri

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
