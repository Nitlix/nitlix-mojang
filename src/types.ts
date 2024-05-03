export type Skin = {
    id: string;
    state: "ACTIVE" | "INACTIVE";
    url: string;
    textureKey: string;
    variant: "SLIM" | "CLASSIC",
}

export type Cape = {
    id: string;
    state: "ACTIVE" | "INACTIVE";
    url: string;
    alias: string;
}

export type Profile = {
    id: string;
    name: string;
    skins: Skin[];
    capes: Cape[];
    profileActions: any;
}