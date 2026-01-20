# Lazy Cursor - Obsidian Plugin

> [!WARNING]
> This plugin is not working reliably anymore in the latest version of Obsidian and currently not maintained.
> 
> **I recommend using the [Cursor GoAway](https://github.com/liuxingyu521/obsidian-plugin-cursor-goaway) plugin instead**, which is available in the Obsidian community plugins.

## About

This is a tiny plugin for [Obsidian](https://obsidian.md) that initially hides the cursor when opening a note. The cursor will reappear when you click somewhere in the note.
I created this plugin to prevent Obsidian from rendering the first line of a note in raw markdown when using Live Preview.

<p align="center">
<img src="https://github.com/TimoBechtel/obsidian-lazy-cursor/assets/48655057/c9ee612f-8b40-422f-9ad8-71b628006e91" width="768" />
</p>

> It basically just runs `editor.blur();` when opening a file. This means the cursor might flicker shortly when opening a file.

## Installation

The plugin is not yet available through the Obsidian Plugin Browser. Until it is submitted, you can use the [BRAT Plugin](https://obsidian.md/plugins?id=obsidian42-brat) to install it. Just add https://github.com/TimoBechtel/obsidian-lazy-cursor to your list of beta plugins.
