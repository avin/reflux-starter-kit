# Reflux starter kit

Create your another reflux project faster.

### Installation

You need Webpack installed globally:
```sh
$ npm install -g webpack webpack-dev-server
```

Clone repository
```sh
$ git clone https://github.com/avin/reflux-starter-kit
$ cd ./reflux-starter-kit
$ npm install
```

### Build

#### Dynamic build for development
```sh
$ webpack-dev-server --host site.dev --port 8888
```
Open http://site.dev:8888/webpack-dev-server/ 

#### Productionn build
```sh
$ NODE_ENV=production webpack 
```

Start dev and enjoy!

License
----

MIT
