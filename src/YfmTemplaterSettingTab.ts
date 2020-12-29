import { PluginSettingTab, Setting } from 'obsidian';
import YfmTemplaterPlugin from './main';

export class YfmTemplaterSettingTab extends PluginSettingTab {
	plugin: YfmTemplaterPlugin;

	constructor(plugin: YfmTemplaterPlugin) {
		super(plugin.app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		let { containerEl } = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('Template directory location')
			.setDesc('Files in this directory will be available as templates')
			.addText(text => text
				.setPlaceholder('templates')
				.setValue(this.plugin.settings.templatesDirectory)
				.onChange(async (value) => {
					this.plugin.settings.templatesDirectory = value;
					await this.plugin.saveSettings();
				}));
	}
}
