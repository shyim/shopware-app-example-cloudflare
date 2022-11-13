import { App } from "shopware-app-server-sdk";
import { WebCryptoHmacSigner } from "shopware-app-server-sdk/component/signer";
import { CloudflareShopRepository } from "shopware-app-server-sdk/runtime/cf-worker";
import { Env } from "..";

export function getConfiguredApp(env: Env) {
    return new App(
        {
            appName: env.APP_NAME,
            appSecret: env.APP_SECRET,
            authorizeCallbackUrl: `${env.APP_URL}/authorize/callback`
        },
        new CloudflareShopRepository(env.appRegistrationNamespace),
        new WebCryptoHmacSigner()
    )
}