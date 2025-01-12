import { Profile } from "../../types";

type ErrorResponse = {
    path: string;
    errorType?: string;
    errorMessage: string;
    ok: false;
};

type SuccessResponse = Profile & {
    ok: true;
};

type SkinVariant = "classic" | "slim";

export default async function (
    session: string,
    mojangSkinUrl: string,
    mojangSkinVariant: SkinVariant
): Promise<ErrorResponse | SuccessResponse> {
    const response = await fetch(
        `https://api.minecraftservices.com/minecraft/profile/skins`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${session}`,
            },
            body: JSON.stringify({
                url: mojangSkinUrl,
                variant: mojangSkinVariant,
            }),
        }
    );

    const data = await response.json();
    data.ok = response.ok;
    return data;
}
