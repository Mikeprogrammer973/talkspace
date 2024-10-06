import { MutableFile } from "megajs";
import { storage } from "./config";

export enum FolderPath {
    "POSTS" = "posts",
    "PROFILES" = "profiles"
}

export class Mega 
{
    
    private async connect(path: FolderPath)
    {
        await storage.ready
        return Object.values(storage.files).find(folder => folder.name === "talkspace")?.find(folder => folder.name === "user")?.find(folder => folder.name === path.toString())
    }

    async upload(path: FolderPath, filePrms: {name: string, data: any})
    {
        await this.delete(path, filePrms.name);
        (await this.connect(path))?.upload(filePrms.name, Buffer.from(filePrms.data, 'base64'))
    }

    async delete(path: FolderPath, filename: string)
    {
        await (await this.connect(path))?.find((file: MutableFile) => file.name === filename)?.delete(true)
    }

    async download(path: FolderPath, filename: string)
    {
        return await (await this.connect(path))?.find(file => file.name === filename)?.downloadBuffer({})
    }
}