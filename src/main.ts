import { Notice, Plugin, Setting, Editor } from 'obsidian';
import { App } from 'obsidian';

export default class DigiCup extends Plugin {
  async onload() {
    console.log('Loading plugin...');
    this.addRibbonIcon('dice', 'Greet', () => {
      new Notice('Hello, world!');
    });
    this.addCommand({
        id: 'insert-todays-date',
        name: 'Insert today\'s date',
        editorCallback: (editor: Editor) => {
          const date = new Date();
          const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          });
          editor.replaceSelection(formattedDate);
          editor.getCursor()
        }
    });
  }

  onunload() {
    console.log('Unloading plugin...');
  }
}