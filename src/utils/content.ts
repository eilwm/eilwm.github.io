import type { CollectionEntry } from "astro:content";

type SupportedEntry =
  | CollectionEntry<"blog">
  | CollectionEntry<"research">;

const EXTENSION_PATTERN = /\.(md|mdx)$/i;

function basename(id: string) {
  const name = id.split("/").pop();
  return name ?? id;
}

export function slugOf(entry: SupportedEntry) {
  if (entry.slug) return entry.slug;
  return basename(entry.id).replace(EXTENSION_PATTERN, "");
}
