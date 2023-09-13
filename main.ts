import { Plugin } from "obsidian";

export default class LazyCursor extends Plugin {
	async onload() {
		this.registerEvent(
			this.app.workspace.on("file-open", () => {
				this.app.workspace.activeEditor?.editor?.blur();
			})
		);
	}

	onunload() {}
}
