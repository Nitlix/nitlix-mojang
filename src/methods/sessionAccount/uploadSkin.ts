
async function base64ToBinary(base64: string): Promise<ArrayBuffer> {
    const binaryString = atob(base64.split(',')[1]);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}

export default async function (session: string, variant: "classic" | "slim", fileName: string, base64: string): Promise<boolean> {
    const formData = new FormData();

    formData.append('variant', variant);
    const binaryData = await base64ToBinary(base64);
    const blobData = new Blob([binaryData]);
    formData.append('file', blobData, fileName);
    
    const response = await fetch(`https://api.minecraftservices.com/minecraft/profile/skins`,
        {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${session}`,
                "Content-Type": "image/png"
            },
            body: `data:image/png;base64,${base64}`,
        });

    return response.ok;
}