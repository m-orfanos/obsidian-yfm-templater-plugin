import * as Eta from "Eta";
import * as path from "path";
import * as dateFns from 'date-fns'

import { YfmTemplaterRenderService } from "./YfmTemplaterRenderService";
import { YfmTemplaterPluginSettings } from "src/YfmTemplaterPluginSettings";
import { App, TFile } from "obsidian";

// Set YfmTemplater's configuration
Eta.configure({
    autoTrim: false,
    // This tells YfmTemplater to look for templates
    // In the /views directory
    views: path.join(__dirname, "templates")
});

const utilities = {
    dateFns
};

export class EtaYfmTemplaterRenderService implements YfmTemplaterRenderService {
    constructor(private app: App, private settings: YfmTemplaterPluginSettings) {
    }

    async render(template: string, context: any): Promise<string | void> {
        let userDefinedExtensionsLocation = await this.readFile(this.settings.userDefinedExtensionsLocation);
        const extensions = eval(userDefinedExtensionsLocation) || {};
        const merged = { ...utilities, ...extensions, ...context };
        return await Eta.renderAsync(template, merged);
    }

    async readFile(path: string): Promise<string> {
        if (!path) {
            return;
        }
        let file = this.app.vault.getAbstractFileByPath(path);
        if (file instanceof TFile) {
            return await this.app.vault.read(file);
        }
    }
}
