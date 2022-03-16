# FWD Backend project 1: Image Processing API

## Usage

Accessing [/api/images?filename=fjord&width=200&height=200](localhost:3000/api/images?filename={fjord}&width={200}&height={200}) will convert the image file fjord.jpg and resize it to 200×200 and serve the resized image. For any subsequent calls to the API with the same parameters, the server will serve a cached version. server runs on port 3000 by default.

## Scripts

1. `npm install` to install dependencies
2. `npm run build` to create js files
3. `npm run lint` to lint \*.ts files
4. `npm run prettier` to prettify \*.ts files
5. `npm run local` to run dev server with auto-reloading
6. `npm run test` to build project and run tests

## Available images

encenadaport <br>
fjord <br>
icelandwaterfall <br>
palmtunnel <br>
santamonica <br>
