import { app, BrowserWindow } from 'electron';
import path from 'node:path';

class MainElectron {
  private app: Electron.App;
  private mainWindow: Electron.BrowserWindow | undefined;

  constructor() {
    this.app = app;
  }

  private async createWindow() {
    this.mainWindow = new BrowserWindow({
      //fullscreen: true,
    });

    //this.mainWindow.maximize();

    this.mainWindow.loadFile(path.join(__dirname, '../../public/index.html'));
  }

  public async run() {
    await app.whenReady();
    await this.createWindow();
  }
}

export { MainElectron };
