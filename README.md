# svg2jsx – Visual Studio Code Formatter Extension

VSCode formatter extension that converts `<svg></svg>` tags to JSX syntax in `.js` / `.ts` / `.jsx` / `.tsx` files via [`SVGR`](https://react-svgr.com), converting attributes like `class`, `fill-opacity` and `image-rendering` to `className`, `fillOpacity` and `imageRendering`, respectively.

## Usage

Open the Command Palette with `Cmd+Shift+P`, then type and select `"Format Document With..."` → `svg2jsx`.

Optionally, in Settings, configure `Editor: Default Formatter` to be `svg2jsx` and enable `Editor: Format On Save`.
