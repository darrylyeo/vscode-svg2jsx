import { ExtensionContext, languages, TextDocument, TextEdit, Range } from 'vscode'

import { transform } from '@svgr/core'


const asyncReplace = async ({
	string,
	regex,
	replacer,
}: {
	string: string,
	regex: RegExp,
	replacer: (...args: any[]) => Promise<string>,
}) => {
	const replacements = await Promise.all(
		Array.from(
			string.matchAll(regex),
			match => replacer(...match),
		)
	)

	let i = 0
	return string.replace(regex, () => replacements[i++])
}


export const activate = (context: ExtensionContext) => {
	console.log('Extension "svg2jsx" is now active!')

	languages.registerDocumentFormattingEditProvider(
		[
			{
				language: 'javascript',
			},
			{
				language: 'typescript',
			},
			{
				language: 'javascriptreact',
			},
			{
				language: 'typescriptreact',
			},
		],
		{
			provideDocumentFormattingEdits: async (document: TextDocument): Promise<TextEdit[]> => {
				const text = document.getText()

				const jsx = await asyncReplace({
					string: text,
					regex: /<svg[^>]*>[\s\S]*?<\/svg>/g,
					replacer: async (svg: string) => (
						svg.includes('={')
							? svg
							: (await transform(
								svg,
								{
									plugins: [
										'@svgr/plugin-jsx',
										'@svgr/plugin-prettier'
									],
									expandProps: false,
									template: ({ jsx }, { tpl }) => tpl`${jsx}`,
								},
							))
								.replace(/;\n$/, '')
					)
				})

				return [
					TextEdit.replace(new Range(document.positionAt(0), document.positionAt(text.length)), jsx)
				]
			}
		}
	)
}
