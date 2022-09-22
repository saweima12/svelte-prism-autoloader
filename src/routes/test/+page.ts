import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	let response = await fetch('/test.json');
	let data = await response.json();

	let metadta: Record<string, any> = data.metadata;
	let content: string = data.content;

	return {
		metadata: metadta,
		content: content
	};
};
