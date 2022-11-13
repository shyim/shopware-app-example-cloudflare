import { convertRequest } from "shopware-app-server-sdk/runtime/cf-worker";
import { Env } from "../..";
import { getConfiguredApp } from "../../helper/app-sdk";
import html from './index.html';

export async function moduleInfo(request: Request, env: Env) {
    const app = getConfiguredApp(env)
    const req = await convertRequest(request)

    // context contains info like which shop and so
    const ctx = await app.contextResolver.fromModule(req)

    return new Response(html, {
        headers: {
            'content-type': 'text/html'
        }
    })
}