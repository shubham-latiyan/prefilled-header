/* --------------------------------------------------------------------------------
 * Copyright: Altair Engineering Inc., 2023. All rights reserved.
 * Contains trade secrets of Altair Engineering, Inc.
 * Copyright notice does not imply publication.
 * Decompilation or disassembly of this software is strictly prohibited.
 * --------------------------------------------------------------------------------*/
'use script';

import * as configuration from '../configuration';

export class Copyright {
  protected author: string;
  protected year: string;
  protected headerText: string;

  constructor() {
    this.author = configuration.getAuthor();
    this.year = new Date().getFullYear().toString();
    this.headerText = configuration.getHeaderText().toString();
  }

  public header(): string {
    let template = this.headerText;
    return template;
  }
}
