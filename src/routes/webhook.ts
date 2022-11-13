import { convertRequest } from "shopware-app-server-sdk/runtime/cf-worker";
import { Env } from "..";
import { getConfiguredApp } from "../helper/app-sdk";

interface ShopwareUpdateRecord {
    entity: string;
    operation: string;
    primaryKey: string;
    updatedFields: string[];
}

export async function onProductWritten(request: Request, env: Env) {
    const app = getConfiguredApp(env);
    const convertedRequest = await convertRequest(request);

    const source = await app.contextResolver.fromSource(convertedRequest);

    const updates = source.payload.data.payload as ShopwareUpdateRecord[];

    for (const update of updates) {
        // Avoid recursion as we update the description
        if (update.updatedFields.includes('description')) {
            continue;
        }

        await source.httpClient.patch(`/product/${update.primaryKey}`, {
            description: 'Hello from my serverless app!'
        });
    }

    return new Response('');
}