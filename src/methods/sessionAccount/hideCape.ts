export default async function(session: string): Promise<boolean> {
    const response = await fetch(`https://api.minecraftservices.com/minecraft/profile/capes/active`, 
        {method: "DELETE", headers: {"Authorization": `Bearer ${session}`}});

    return response.ok;
}