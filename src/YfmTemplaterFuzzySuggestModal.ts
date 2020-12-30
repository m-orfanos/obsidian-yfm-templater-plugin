import { FuzzySuggestModal, Notice, TFile, TFolder, Vault } from 'obsidian';
import YfmTemplaterPlugin from "./main";

export class YfmTemplaterFuzzySuggestModal extends FuzzySuggestModal<string> {
	constructor(private plugin: YfmTemplaterPlugin) {
		super(plugin.app);
	}

	getItems(): string[] {
		return this.readTemplatesFromDisk();
	}

	getItemText(item: string): string {
		return item;
	}

	onChooseItem(item: string, evt: MouseEvent | KeyboardEvent): void {
		this.plugin.templaterService().insertTemplate(item);
	}

	readTemplatesFromDisk(): string[] {
		let templates: string[] = [];
		let dir = this.app.vault.getAbstractFileByPath(this.plugin.settings.templatesDirectory);
		if (dir instanceof TFolder) {
			Vault.recurseChildren(dir, file => {
				if (file instanceof TFile) {
					templates.push(file.path);
				}
			});
		}

		if (templates.length === 0) {
			new Notice(`No templates in directory! '${this.plugin.settings.templatesDirectory}'`);
			throw new Error(`No templates in directory! '${this.plugin.settings.templatesDirectory}'`);
		}

		return templates;
	}

	public async promptTemplate() {
		let templates = this.readTemplatesFromDisk();
		if (templates.length > 1) {
			this.open();
		} else {
			await this.plugin.templaterService().insertTemplate(templates[0]);
		}
	}
}
