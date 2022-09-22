import { json, type RequestHandler } from '@sveltejs/kit';
import { getPage } from 'markedpage';

export const GET: RequestHandler = async ({ params }) => {
	const { slug } = params;

	if (!slug) return json({});

	let page = await getPage(slug);
	let content = await page.render();

	return json({
		metadata: page.frontMatter,
		content: content
	});
};
