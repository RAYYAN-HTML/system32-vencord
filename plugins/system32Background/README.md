# System32 Background

A companion Vencord/Equicord user plugin for the [System32 Anime theme](https://github.com/RAYYAN-HTML/system32-vencord). Paste a direct image URL into the plugin's settings to change the theme background without editing the CSS file. Clear the field to return to the theme's built-in image.

## Use

1. Install and enable the System32 Anime CSS theme.
2. Add this plugin to a Vencord or Equicord source checkout at `src/userplugins/system32Background/index.ts`.
3. Rebuild and reinstall the client mod, then enable **System32Background** in **Settings → Vencord/Equicord → Plugins**.
4. Open the plugin settings and paste a direct `https://` or `http://` image URL.

The URL must point directly to an image file or image response. A link to a webpage, a private/login-protected image, or a host that blocks Discord's image requests may not display. The plugin only changes the CSS variable used by System24-based themes; it does not upload or proxy images.

## Compatibility note

This is source code for a custom Vencord-style plugin, not a standalone BetterDiscord plugin. Vencord's documented custom-plugin workflow requires building Vencord from source. Equicord is a Vencord fork, but its custom-plugin build/install steps should be checked against the Equicord version in use.
