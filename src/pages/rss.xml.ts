import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

import { slugOf } from "../utils/content";

export async function GET(context: APIContext) {
  const posts = (await getCollection("blog")).sort(
    (a, b) => +b.data.pubDate - +a.data.pubDate
  );

  const site = context.site?.toString();
  if (!site) {
    throw new Error("rss.xml: 'site' is undefined. Set 'site' in astro.config.mjs.");
  }

  return rss({
    title: "Kshitij Anand — Blog",
    description: "Research notes, build logs, and thoughts.",
    site,
    items: posts.map((entry) => ({
      link: `/blog/${slugOf(entry)}/`,
      title: entry.data.title,
      pubDate: entry.data.pubDate,
      description: entry.data.description ?? "",
    })),
    stylesheet: false,
  });
}
