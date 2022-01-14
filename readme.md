# GETTING STARTED

(Install this package locally in your project)
(This package requires parcel to be instlled locally in your project)
By default parcel dosent support automated ip detection for hosting on local network.
This package aims to solve that problem by automatically detecting the local network ip. If not found it will fall back on localhost which is 127.0.0.1
by default it will look for index.html in src folder (src/index.html)

## INSTALLATION

```sh
npm install parcel-on-network
```

## USAGE

### specifying the file (default to src/index.html)

```sh
pon --file=./index.js
```

### specifying the port number (default to 8080)

```sh
pon --file=./index.js --port=3000
```

### generating qr

```sh
pon --file=./index.js --qr
```

it will generate the qr of the generated url.

### getting help

```sh
pon --help
```

## COMMAND

add pon in your script in package.json

```sh
"scripts": {
    "dev": "pon"
}
```
