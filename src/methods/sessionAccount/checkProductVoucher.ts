export default async function (
    accountSession: string,
    giftCode: string
): Promise<boolean> {
    const response = await fetch(
        `https://api.minecraftservices.com/productvoucher/${giftCode}`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accountSession}`,
            },
        }
    );
    return response.ok;
}
