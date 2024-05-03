

type Response = {
    keyPair: {
        privateKey: string,
        publicKey: string,
    },
    publicKeySignature: string,
    publicKeySignatureV2: string,
    expiresAt: Date
    refreshedAfter: Date
}

export default async function(session: string): Promise<Response | null> {
    const response = await fetch(`https://api.minecraftservices.com/player/certificates`,
        {headers: {"Authorization": `Bearer ${session}`}, method: "POST"});
    
    if (!response.ok) return null;
    const data = await response.json();
    return {
        keyPair: {
            privateKey: data.keyPair.privateKey,
            publicKey: data.keyPair.publicKey,
        },
        publicKeySignature: data.publicKeySignature,
        publicKeySignatureV2: data.publicKeySignatureV2,
        expiresAt: new Date(data.expiresAt),
        refreshedAfter: new Date(data.refreshedAfter)
    }
}