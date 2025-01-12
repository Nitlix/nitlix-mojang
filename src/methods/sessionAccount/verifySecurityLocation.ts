type SuccessResponse = {
    ok: true;
};

type ErrorResponse = {
    ok: false;
    error: {
        error: string;
        errorMessage: string;
    };
};

export default async function (
    session: string
): Promise<SuccessResponse | ErrorResponse> {
    const response = await fetch(
        `https://api.mojang.com/user/security/location`,
        { headers: { Authorization: `Bearer ${session}` } }
    );

    if (!response.ok)
        return {
            ok: false,
            error: await response.json(),
        };
    else {
        return { ok: true };
    }
}
