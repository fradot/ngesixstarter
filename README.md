[![Build Status](https://travis-ci.org/fradot/ngesixstarter.svg?branch=master)](https://travis-ci.org/fradot/ngesixstarter)
[![devDependencies Status](https://david-dm.org/fradot/ngesixstarter/dev-status.svg)](https://david-dm.org/fradot/ngesixstarter?type=dev)

# Angular ES6 TDD-ready frontend boilerplate

ngesixstarter is a simple front-end starter template for building AngularJS applications using ECMAScript6 features.

## Features:

- AngularJS + ES6 + Karma + Jasmine
- TDD-ready environment.
- ECMAScript6 support.
- CSS & Javascript source map.
- Livereload! Browser automatically refresh on changes.
- LESS support.   
- Javascript & CSS minification.
- Javascript linting.
- CSS Autoprefixer.
- <a href="https://github.com/fradot/ngesixstarter/blob/master/LICENSE.txt">MIT License</a>

## Quick Start
1. Download the zip project <a href="https://github.com/fradot/ngesixstarter/archive/master.zip">here</a>

2. Or clone this git repo: <pre><code>git clone https://github.com/fradot/ngesixstarter.git</code></pre>


##### Install dependencies & Start developing

Install project dependencies from command line:
<pre><code>npm install</code></pre>

Run gulp command and start developing:
<pre><code>gulp</code></pre>

By default gulp will start a new web server at http://localhost:8080 and karma for test execution.

Javascript code will be transpiled to EcmaScript5. All js files will be minified and included in dist/js/app.js.

Enable javascript **source maps** in your browser to easily debug your application.

##### Build project
Build your project using the build command:
<pre><code>gulp build</code></pre>

The above command will produce a 'dist' folder.

## Docker
Run your project with docker! Install Docker and use the following commands to build the image and run the container:

cd into your project folder and build docker image:
<pre><code>docker build -t your_project .</code></pre>

install dependencies:
<pre><code>docker run --rm -v path/to/your/project:/opt your_project npm install</code></pre>

start developing:
<pre><code>docker run --rm -v path/to/your/project:/opt your_project</code></pre>



## Todo

- setup bower configuration
- review and improve build
