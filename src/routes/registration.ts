import { convertRequest, convertResponse } from "shopware-app-server-sdk/runtime/cf-worker";
import { Env } from "..";
import { getConfiguredApp } from "../helper/app-sdk";

export async function authorize(request: Request, env: Env): Promise<Response> {
    const app = getConfiguredApp(env)
    const req = await convertRequest(request);

    return await convertResponse(await app.registration.authorize(req));
}

export async function authorizeCallback(request: Request, env: Env): Promise<Response> {
    const app = getConfiguredApp(env)
    const req = await convertRequest(request);

    return await convertResponse(await app.registration.authorizeCallback(req));
}