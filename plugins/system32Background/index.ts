/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026 Rayyan
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings } from "@api/Settings";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
    backgroundUrl: {
        type: OptionType.STRING,
        description: "Direct URL to a background image. Leave empty to use the theme's default image.",
        default: "",
        placeholder: "https://example.com/image.jpg",
        onChange: applyBackground
    }
});

const CSS_VARIABLE = "--background-image-url";

function applyBackground() {
    const { body } = document;
    if (!body) return;

    const value = settings.store.backgroundUrl.trim();
    if (!value) {
        body.style.removeProperty(CSS_VARIABLE);
        return;
    }

    try {
        const url = new URL(value);
        if ((url.protocol !== "https:" && url.protocol !== "http:") || url.username || url.password) {
            body.style.removeProperty(CSS_VARIABLE);
            return;
        }

        // URL.href normalizes and escapes characters before it is placed in CSS.
        body.style.setProperty(CSS_VARIABLE, `url("${url.href}")`);
    } catch {
        // Keep the theme's own background when the setting is not a valid URL.
        body.style.removeProperty(CSS_VARIABLE);
    }
}

export default definePlugin({
    name: "System32Background",
    description: "Change the System32 Anime theme background with an image URL.",
    authors: [{ name: "Rayyan", id: 1512423297428492435n }],
    settings,

    start: applyBackground,

    stop() {
        document.body?.style.removeProperty(CSS_VARIABLE);
    }
});
