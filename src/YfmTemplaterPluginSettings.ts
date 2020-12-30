export interface YfmTemplaterPluginSettings {
	templatesDirectory: string;
	userDefinedExtensionsLocation: string;
}

export const DEFAULT_SETTINGS: YfmTemplaterPluginSettings = {
	templatesDirectory: 'templates',
	userDefinedExtensionsLocation: 'templates/extensions.eta.js'
};
