import { Profile } from "../../types";

type ErrorResponse = {
    path: string;
    errorType?: string;
    error?: string;
    details?: {
        status: string;
    };
    errorMessage?: string;
    developerMessage?: string;
    statusCode: number;
};

export default async function (
    session: string,
    newName: string
): Promise<Profile | ErrorResponse | undefined> {
    const response = await fetch(
        `https://api.minecraftservices.com/minecraft/profile/name/${newName}`,
        { method: "PUT", headers: { Authorization: `Bearer ${session}` } }
    );

    if (!response.ok) {
        const error: ErrorResponse = await response.json();
        error.statusCode = response.status;
        return error;
    }

    return await response.json();
}
