import WOW from "wow.js";

export default defineNuxtPlugin((nuxtApp) => {
    if (typeof window !== "undefined") {
        nuxtApp.wow = new WOW({
            live: false,
        });

        nuxtApp.hook("app:mounted", () => {
            nuxtApp.wow.init();
        });
    }
});
