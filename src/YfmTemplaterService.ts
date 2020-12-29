import matter from 'gray-matter';

import { EtaYfmTemplaterRenderService } from 'src/renderers/EtaYfmTemplaterRenderService';
import { App, Notice, TFile } from 'obsidian';
import { YfmTemplaterRenderService } from "./renderers/YfmTemplaterRenderService";

export class YfmTemplaterService {
    renderService: YfmTemplaterRenderService;

    constructor(private app: App) {
        this.renderService = new EtaYfmTemplaterRenderService();
    }

    async insertTemplate(path: string) {
        let active = this.app.workspace.getActiveFile();
        if (active == null) {
            new Notice("No active file!");
            return;
        }

        let content = await this.app.vault.read(active);
        let contentMatter = matter(content);

        let template = await this.readFile(path);

        let rendered = await this.renderService.render(template, contentMatter.data);
        if (!rendered) {
            new Notice(`Unable to render template '${path}'`);
            throw new Error(`Unable to render template '${path}'`);
        }
        let renderedMatter = matter(rendered);

        let merged = {...contentMatter.data, ...renderedMatter.data};

        let newContent = matter.stringify(contentMatter.content + renderedMatter.content, merged);
        await this.app.vault.modify(active, newContent);
    }

    async readFile(path: string): Promise<string> {
        let file = this.app.vault.getAbstractFileByPath(path);
        if (file instanceof TFile) {
            return await this.app.vault.read(file);
        } else {
            new Notice(`Unable to read '${file?.path}'`);
            throw new Error(`Unable to read '${file?.path}'`);
        }
    }

}
