

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.pSvET1Gs.js","_app/immutable/chunks/Zxz7OfLJ.js","_app/immutable/chunks/w9TiaPO3.js"];
export const stylesheets = [];
export const fonts = [];
