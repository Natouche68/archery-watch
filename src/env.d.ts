/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_WEBSOCKET_SERVER: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
