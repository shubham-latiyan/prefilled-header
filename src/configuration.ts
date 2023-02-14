import * as vscode from 'vscode';
import { Copyright } from './copyright/copyright';

function getConfiguration(): vscode.WorkspaceConfiguration {
  return vscode.workspace.getConfiguration('prefilledHeader');
}

export function getAuthor(): string {
  return getConfiguration().get('author') || '';
}

export function getCopyright(): Copyright {
  return new Copyright();
}

export function getNewFilesOnly(): Boolean {
  return getConfiguration().get('newFilesOnly') || false;
}

export function getHeaderText(): string {
  return getConfiguration().get('text') || '';
}

export function getConfiguredLanguage(): Set<string> {
  return new Set(getConfiguration().get('languages')) || new Set([]);
}

// export const configuredLanguages = new Set([
//   'c',
//   'cpp',
//   'csharp',
//   'css',
//   'go',
//   'java',
//   'javascript',
//   'javascriptreact',
//   'python',
//   'objective-c',
//   'rust',
//   'scss',
//   'swift',
//   'sql',
//   'typescript',
//   'typescriptreact',
//   'vue',
// ]);
