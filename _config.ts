import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";
import date from "lume/plugins/date.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import pagefind from "lume/plugins/pagefind.ts";

const site = lume({
    src: "./src",
    dest: "./_site",
    emptyDest: true,
    prettyUrls: true,
    server: {
        port: 3000,
        page404: "./404.html",
        open: false,
    },
    watcher: {
        debounce: 1000,
        // ignore: [
        //     ""
        // ],
    },
    // components: {
    //     variable: "comp",
    //     cssFile: "/components.css",
    //     jsFile: "/components.js",
    // },
});

site
    .ignore("README.md")
    .copy("assets", ".")
    .use(postcss())
    .use(date())
    .use(codeHighlight())
    .use(basePath())
    .use(slugifyUrls({ alphanumeric: false }))
    .use(resolveUrls())
    .use(pagefind({
        ui: {
            containerId: "search",
            showImages: false,
            showEmptyFilters: true,
            resetStyles: false,
        },
    }));

export default site;
