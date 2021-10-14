# GETTING STARTED

by default parcel dosent support (i think) automated ip detection for hosting on local network.
This package aims to solve that problem by automatically detecting the local network ip. If not found it will fall back on localhost which is 127.0.0.1
by default it will look for index.html in src folder (for now).(src/index.html)

## INSTALLATION
```sh
npm install -g yarn
```
## COMMAND
add pon in your script in package.json

```sh
"scripts": {
    "dev": "pon"
}
```

