type Response = {
    changedAt: Date | null;
    createdAt: Date;
    nameChangeAllowed: boolean;

}

export default async function(session: string): Promise<Response | null> {
    const response = await fetch(`https://api.minecraftservices.com/minecraft/profile/namechange`,
    {
        headers: {"Authorization": `Bearer ${session}`}
    });
    
    if (!response.ok) return null;
    const data = await response.json();
    return {
        changedAt: data.changedAt ? new Date(data.changedAt) : null,
        createdAt: new Date(data.createdAt),
        nameChangeAllowed: data.nameChangeAllowed
    }
}