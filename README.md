# svg2jsx – Visual Studio Code Formatter Extension

A formatter extension for Visual Studio Code that converts plain `<svg></svg>` tags in `.js` / `.ts` / `.jsx` / `.tsx` files to JSX syntax via [SVGR](https://react-svgr.com), converting attributes like `class`, `fill-opacity` and `image-rendering` to `className`, `fillOpacity` and `imageRendering` respectively.

## Installation

### with `npm`

```sh
git clone https://github.com/darrylyeo/vscode-svg2jsx
npm i
npm run package
npm run install
```

### with `bun`

```sh
git clone https://github.com/darrylyeo/vscode-svg2jsx
bun i
bun run package
bun run install
```

## Usage

In Visual Studio Code, open the Command Palette with `Cmd+Shift+P`, then type and select `"Format Document With..."` → `svg2jsx`.

Optionally, in Settings, set `Editor: Default Formatter` to `svg2jsx` and enable `Editor: Format On Save`.
