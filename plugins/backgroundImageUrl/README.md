# Background Image URL

Change a Discord theme's background image from plugin settings, without editing the theme file. This works with themes that use a CSS custom property for their background image; it is not tied to System32 Anime or another specific theme.

## Settings

- **Background URL:** a direct `http://` or `https://` image URL.
- **CSS variable:** the custom property your theme uses for its background image. The default is `--background-image-url`.

For example, if a theme defines `--my-theme-bg: url("...")`, enter `--my-theme-bg` in the CSS variable field. Clear the URL to let the theme's own value take effect again.

The plugin sets the selected property on `body`, so themes should use that property on `body` or inherit it on their background element. Themes that hard-code `background-image: url(...)` directly, without a configurable custom property, are not compatible unless their CSS is changed to use one. Image hosts may also block requests from Discord; use a direct image URL that is publicly accessible.

