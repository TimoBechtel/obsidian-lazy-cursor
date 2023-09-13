# Lazy Cursor - Obsidian Plugin

This is a tiny plugin for [Obsidian](https://obsidian.md) that initially hides the cursor when opening a note. The cursor will reappear when you click somewhere in the note.
I created this plugin to prevent Obsidian from rendering the first line of a note in raw markdown when using Live Preview.

<p align="center">
<img src="https://github.com/TimoBechtel/obsidian-lazy-cursor/assets/48655057/c9ee612f-8b40-422f-9ad8-71b628006e91" width="768" />
</p>

> It basically just runs `editor.blur();` when opening a file. This means the cursor might flicker shortly when opening a file.
