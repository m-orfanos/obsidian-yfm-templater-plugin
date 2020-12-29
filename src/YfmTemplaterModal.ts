import YfmTemplaterPlugin from 'src/main';
import { Modal } from 'obsidian';

export class YfmTemplaterModal extends Modal {
	constructor(plugin: YfmTemplaterPlugin) {
		super(plugin.app);
	}

	onOpen() {
		let { contentEl } = this;
		contentEl.setText('Woah!');
	}

	onClose() {
		let { contentEl } = this;
		contentEl.empty();
	}
}
