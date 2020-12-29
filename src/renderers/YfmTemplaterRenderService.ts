export interface YfmTemplaterRenderService {
	render(template: string, context: any): Promise<string | void>;
}
