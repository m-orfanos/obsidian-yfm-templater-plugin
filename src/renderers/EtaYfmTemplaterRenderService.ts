import * as Eta from "Eta";
import * as path from "path";
import * as dateFns from 'date-fns'

import { YfmTemplaterRenderService } from "./YfmTemplaterRenderService";

// Set YfmTemplater's configuration
Eta.configure({
    autoTrim: false,
    // This tells YfmTemplater to look for templates
    // In the /views directory
    views: path.join(__dirname, "templates")
});

let utilities = {
    dateFns
};

export class EtaYfmTemplaterRenderService implements YfmTemplaterRenderService {
    async render(template: string, context: any): Promise<string | void> {
        let merged = {...utilities, ...context};
        console.log(merged);
        return await Eta.renderAsync(template, merged);
    }
}
