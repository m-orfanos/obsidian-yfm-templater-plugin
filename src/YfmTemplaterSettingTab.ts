import { PluginSettingTab, Setting } from 'obsidian';
import YfmTemplaterPlugin from './main';
import { DEFAULT_SETTINGS } from './YfmTemplaterPluginSettings';

export class YfmTemplaterSettingTab extends PluginSettingTab {
	plugin: YfmTemplaterPlugin;

	constructor(plugin: YfmTemplaterPlugin) {
		super(plugin.app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		let { containerEl } = this;

		containerEl.empty();

		console.log(this.plugin.settings);

		new Setting(containerEl)
			.setName('Template directory location')
			.setDesc('Files in this directory will be available as templates')
			.addText((text) => {
				text.setPlaceholder(DEFAULT_SETTINGS.templatesDirectory);
				text.setValue(this.plugin.settings.templatesDirectory);
				text.onChange(async (value) => {
					this.plugin.settings.templatesDirectory = value;
					await this.plugin.saveSettings();
				});
			});

		new Setting(containerEl)
			.setName('User-defined extensions JavaScript file location')
			.setDesc('This file extends functionality with user-defined functions')
			.addText((text) => {
				text.setPlaceholder(DEFAULT_SETTINGS.userDefinedExtensionsLocation);
				text.setValue(this.plugin.settings.userDefinedExtensionsLocation || DEFAULT_SETTINGS.userDefinedExtensionsLocation);
				text.onChange(async (value) => {
					this.plugin.settings.userDefinedExtensionsLocation = value;
					await this.plugin.saveSettings();
				});
			});
	}
}
