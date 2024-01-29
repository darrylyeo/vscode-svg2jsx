import { ExtensionContext, languages, TextDocument, TextEdit } from 'vscode'

export const activate = (context: ExtensionContext) => {
	languages.registerDocumentFormattingEditProvider(
		[
			'javascriptreact',
			'typescriptreact',
		],
		{
			provideDocumentFormattingEdits: (document: TextDocument): TextEdit[] => {
				const firstLine = document.lineAt(0)
				return [TextEdit.insert(firstLine.range.start, '42\n')]
			}
		}
	)
}
