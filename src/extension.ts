/* --------------------------------------------------------------------------------  * Copyright: Altair Engineering, Inc., 2020.  All rights reserved.  * Contains trade secrets of Altair Engineering, Inc.  * Copyright notice does not imply publication.  * Decompilation or disassembly of this software is strictly prohibited.  * --------------------------------------------------------------------------------*/ import * as vscode from 'vscode';
import * as copyrightService from './copyright/copyrightService';

export function activate(context: vscode.ExtensionContext) {
  copyrightService.handleCopyrightCheck(vscode.window.activeTextEditor);

  let disposable = vscode.commands.registerCommand(
    'extension.addCopyright',
    () => {
      const copyrightAdded = copyrightService.handleManualCopyrightCheck(
        vscode.window.activeTextEditor
      );
      if (copyrightAdded) {
        vscode.window.showInformationMessage('Copyright Added');
      } else {
        vscode.window.showInformationMessage(
          'Copyright could not be added to this file.'
        );
      }
    }
  );

  // Create listener for automatically handling copyright checks
  vscode.window.onDidChangeActiveTextEditor(
    (editor: vscode.TextEditor | undefined) => {
      copyrightService.handleCopyrightCheck(editor);
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
