import { App, Plugin, PluginManifest } from 'obsidian';
// import { YfmTemplaterModal } from './YfmTemplaterModal';
import { YfmTemplaterPluginSettings, DEFAULT_SETTINGS } from './YfmTemplaterPluginSettings';
import { YfmTemplaterSettingTab } from './YfmTemplaterSettingTab';
import { YfmTemplaterFuzzySuggestModal } from "./YfmTemplaterFuzzySuggestModal";
import { YfmTemplaterService } from './YfmTemplaterService';

export default class YfmTemplaterPlugin extends Plugin {
	settings: YfmTemplaterPluginSettings;

	constructor(app: App, pluginManifest: PluginManifest) {
		super(app, pluginManifest);
	}

	async onload() {
		console.log('Loading YFM Templater plugin');

		await this.loadSettings();

		// this.addRibbonIcon('dice', 'YfmTemplater Plugin', () => {
		// 	new Notice('This is a notice!');
		// });

		// this.addStatusBarItem().setText('Status Bar Text');

		// this.addCommand({
		// 	id: 'open-yfm-templater-modal',
		// 	name: 'Open YFM Templater Modal',
		// 	// callback: () => {
		// 	// 	console.log('Simple Callback');
		// 	// },
		// 	checkCallback: (checking: boolean) => {
		// 		let leaf = this.app.workspace.activeLeaf;
		// 		if (leaf) {
		// 			if (!checking) {
		// 				new YfmTemplaterModal(this).open();
		// 			}
		// 			return true;
		// 		}
		// 		return false;
		// 	}
		// });

		this.addCommand({
			id: 'insert-yfm-templater-template',
			name: 'Insert YFM Templater template',
			callback: async () => {
				let modal = new YfmTemplaterFuzzySuggestModal(this);
				await modal.promptTemplate();
			}
		})

		this.addSettingTab(new YfmTemplaterSettingTab(this));

		// this.registerCodeMirror((cm: CodeMirror.Editor) => {
		// 	console.log('codemirror', cm);
		// });

		// this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
		// 	console.log('click', evt);
		// });

		this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
	}

	onunload() {
		console.log('Unloading YFM Templater plugin');
	}

	async loadSettings() {
		this.settings = Object.assign(DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	templaterService() {
		return new YfmTemplaterService(this.app, this.settings);
	}

}
