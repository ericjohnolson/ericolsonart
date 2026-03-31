declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"posts": {
"a-comedy-in-four-acts-act-theatre.md": {
	id: "a-comedy-in-four-acts-act-theatre.md";
  slug: "a-comedy-in-four-acts-act-theatre";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"a-few-new-sketches.md": {
	id: "a-few-new-sketches.md";
  slug: "a-few-new-sketches";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"a-history-of-ugliness-2.md": {
	id: "a-history-of-ugliness-2.md";
  slug: "a-history-of-ugliness-2";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"a-history-of-ugliness.md": {
	id: "a-history-of-ugliness.md";
  slug: "a-history-of-ugliness";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"a-typed-collection-of-letters-and-short-stories.md": {
	id: "a-typed-collection-of-letters-and-short-stories.md";
  slug: "a-typed-collection-of-letters-and-short-stories";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"an-insurable-collapse.md": {
	id: "an-insurable-collapse.md";
  slug: "an-insurable-collapse";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"anywhere-but-here.md": {
	id: "anywhere-but-here.md";
  slug: "anywhere-but-here";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"artshow-the-mcleod-residence.md": {
	id: "artshow-the-mcleod-residence.md";
  slug: "artshow-the-mcleod-residence";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"boozbot.md": {
	id: "boozbot.md";
  slug: "boozbot";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"calm-before-the-storm.md": {
	id: "calm-before-the-storm.md";
  slug: "calm-before-the-storm";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"cheap-tricks-humiliations-4-donations.md": {
	id: "cheap-tricks-humiliations-4-donations.md";
  slug: "cheap-tricks-humiliations-4-donations";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"claude-lazar.md": {
	id: "claude-lazar.md";
  slug: "claude-lazar";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"clear-as-a-bell.md": {
	id: "clear-as-a-bell.md";
  slug: "clear-as-a-bell";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"concert-posters.md": {
	id: "concert-posters.md";
  slug: "concert-posters";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"dandylion-seeds.md": {
	id: "dandylion-seeds.md";
  slug: "dandylion-seeds";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"dino-xxx-robot.md": {
	id: "dino-xxx-robot.md";
  slug: "dino-xxx-robot";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"dirt-party-kiosk.md": {
	id: "dirt-party-kiosk.md";
  slug: "dirt-party-kiosk";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"dissociative-cowboys.md": {
	id: "dissociative-cowboys.md";
  slug: "dissociative-cowboys";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"extinctable.md": {
	id: "extinctable.md";
  slug: "extinctable";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"eyebeam-maze-installation-drawings.md": {
	id: "eyebeam-maze-installation-drawings.md";
  slug: "eyebeam-maze-installation-drawings";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"family-photo-fatherless.md": {
	id: "family-photo-fatherless.md";
  slug: "family-photo-fatherless";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"fernanda-viegas-martin-wattenberg.md": {
	id: "fernanda-viegas-martin-wattenberg.md";
  slug: "fernanda-viegas-martin-wattenberg";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"finally.md": {
	id: "finally.md";
  slug: "finally";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"giant-of-illinois.md": {
	id: "giant-of-illinois.md";
  slug: "giant-of-illinois";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"growing-up-with-sesame-street.md": {
	id: "growing-up-with-sesame-street.md";
  slug: "growing-up-with-sesame-street";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"hoodies-goodies.md": {
	id: "hoodies-goodies.md";
  slug: "hoodies-goodies";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"hunt-mustard-yellow-dream-machine.md": {
	id: "hunt-mustard-yellow-dream-machine.md";
  slug: "hunt-mustard-yellow-dream-machine";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"i-3-ny-videos-up-at-4cultures-e4c.md": {
	id: "i-3-ny-videos-up-at-4cultures-e4c.md";
  slug: "i-3-ny-videos-up-at-4cultures-e4c";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"i-haz-relay-shun-furapy.md": {
	id: "i-haz-relay-shun-furapy.md";
  slug: "i-haz-relay-shun-furapy";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"industrial-dinosaur-artist-collective.md": {
	id: "industrial-dinosaur-artist-collective.md";
  slug: "industrial-dinosaur-artist-collective";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"joseph-campbell-the-heros-adventure.md": {
	id: "joseph-campbell-the-heros-adventure.md";
  slug: "joseph-campbell-the-heros-adventure";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"karaoke-and-the-argonauts.md": {
	id: "karaoke-and-the-argonauts.md";
  slug: "karaoke-and-the-argonauts";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"let-it-slide.md": {
	id: "let-it-slide.md";
  slug: "let-it-slide";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"long-island-city-csa.md": {
	id: "long-island-city-csa.md";
  slug: "long-island-city-csa";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"mammatus-clouds.md": {
	id: "mammatus-clouds.md";
  slug: "mammatus-clouds";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"man-plus-designs.md": {
	id: "man-plus-designs.md";
  slug: "man-plus-designs";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"my-greatest-fear-is-stealing-my-favorite-socks.md": {
	id: "my-greatest-fear-is-stealing-my-favorite-socks.md";
  slug: "my-greatest-fear-is-stealing-my-favorite-socks";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"my-yoke-is-heavy.md": {
	id: "my-yoke-is-heavy.md";
  slug: "my-yoke-is-heavy";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"myth-of-the-dinosaur.md": {
	id: "myth-of-the-dinosaur.md";
  slug: "myth-of-the-dinosaur";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"new-drawings-e4c-videos-and-act-installation-update.md": {
	id: "new-drawings-e4c-videos-and-act-installation-update.md";
  slug: "new-drawings-e4c-videos-and-act-installation-update";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"noddy-a-seed.md": {
	id: "noddy-a-seed.md";
  slug: "noddy-a-seed";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"noddy-remora-remora.md": {
	id: "noddy-remora-remora.md";
  slug: "noddy-remora-remora";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"noddy-rough-designs.md": {
	id: "noddy-rough-designs.md";
  slug: "noddy-rough-designs";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"on-life-and-work.md": {
	id: "on-life-and-work.md";
  slug: "on-life-and-work";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"pano-dino-rama.md": {
	id: "pano-dino-rama.md";
  slug: "pano-dino-rama";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"prairie-children.md": {
	id: "prairie-children.md";
  slug: "prairie-children";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"quantifying-contentment.md": {
	id: "quantifying-contentment.md";
  slug: "quantifying-contentment";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"remora-remora-illustrations.md": {
	id: "remora-remora-illustrations.md";
  slug: "remora-remora-illustrations";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"renee-french.md": {
	id: "renee-french.md";
  slug: "renee-french";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"rocking-out-with-the-pocket-protector-out.md": {
	id: "rocking-out-with-the-pocket-protector-out.md";
  slug: "rocking-out-with-the-pocket-protector-out";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"sailing-towards-sunshine.md": {
	id: "sailing-towards-sunshine.md";
  slug: "sailing-towards-sunshine";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"saint-peters-nobility-197.md": {
	id: "saint-peters-nobility-197.md";
  slug: "saint-peters-nobility-197";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"saint-sebastian-the-eagle-2.md": {
	id: "saint-sebastian-the-eagle-2.md";
  slug: "saint-sebastian-the-eagle-2";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"saint-sebastian-the-eagle.md": {
	id: "saint-sebastian-the-eagle.md";
  slug: "saint-sebastian-the-eagle";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"scroll-bowl.md": {
	id: "scroll-bowl.md";
  slug: "scroll-bowl";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"selected-for-4cultures-e4c-program.md": {
	id: "selected-for-4cultures-e4c-program.md";
  slug: "selected-for-4cultures-e4c-program";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"snake-pit-through-the-rabbit-hole.md": {
	id: "snake-pit-through-the-rabbit-hole.md";
  slug: "snake-pit-through-the-rabbit-hole";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"st-sebastianmissing-youscreen-prints.md": {
	id: "st-sebastianmissing-youscreen-prints.md";
  slug: "st-sebastianmissing-youscreen-prints";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"story-of-the-underground-murals.md": {
	id: "story-of-the-underground-murals.md";
  slug: "story-of-the-underground-murals";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-hungarian-suicide-song-book.md": {
	id: "the-hungarian-suicide-song-book.md";
  slug: "the-hungarian-suicide-song-book";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-hungarian-suicide-songbook.md": {
	id: "the-hungarian-suicide-songbook.md";
  slug: "the-hungarian-suicide-songbook";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-last-lecture.md": {
	id: "the-last-lecture.md";
  slug: "the-last-lecture";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-long-surf.md": {
	id: "the-long-surf.md";
  slug: "the-long-surf";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-ship-has-sunk.md": {
	id: "the-ship-has-sunk.md";
  slug: "the-ship-has-sunk";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-underground.md": {
	id: "the-underground.md";
  slug: "the-underground";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-war-is-over.md": {
	id: "the-war-is-over.md";
  slug: "the-war-is-over";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"thought-experiement.md": {
	id: "thought-experiement.md";
  slug: "thought-experiement";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"we-had-no-sex.md": {
	id: "we-had-no-sex.md";
  slug: "we-had-no-sex";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"website-design.md": {
	id: "website-design.md";
  slug: "website-design";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"what-the-fuck-should-eric-do-when-he-gets-home.md": {
	id: "what-the-fuck-should-eric-do-when-he-gets-home.md";
  slug: "what-the-fuck-should-eric-do-when-he-gets-home";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"year-of-the-dinosaur.md": {
	id: "year-of-the-dinosaur.md";
  slug: "year-of-the-dinosaur";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"year-of-the-tiger.md": {
	id: "year-of-the-tiger.md";
  slug: "year-of-the-tiger";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
};
"projects": {
"be-vintage.md": {
	id: "be-vintage.md";
  slug: "be-vintage";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"between-two-shores.md": {
	id: "between-two-shores.md";
  slug: "between-two-shores";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"canton-grill-degustatory-research.md": {
	id: "canton-grill-degustatory-research.md";
  slug: "canton-grill-degustatory-research";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"clays-limitless-potential.md": {
	id: "clays-limitless-potential.md";
  slug: "clays-limitless-potential";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"dead-dad-dining-club.md": {
	id: "dead-dad-dining-club.md";
  slug: "dead-dad-dining-club";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"le-petit-nickel.md": {
	id: "le-petit-nickel.md";
  slug: "le-petit-nickel";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"orbiting-together.md": {
	id: "orbiting-together.md";
  slug: "orbiting-together";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"peebs.md": {
	id: "peebs.md";
  slug: "peebs";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"score-sculptures-for-the-sculpture-park.md": {
	id: "score-sculptures-for-the-sculpture-park.md";
  slug: "score-sculptures-for-the-sculpture-park";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"sharing-our-voices.md": {
	id: "sharing-our-voices.md";
  slug: "sharing-our-voices";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"sonic-decay.md": {
	id: "sonic-decay.md";
  slug: "sonic-decay";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"tenant-self-defense.md": {
	id: "tenant-self-defense.md";
  slug: "tenant-self-defense";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"we-are-a-crowd-of-others.md": {
	id: "we-are-a-crowd-of-others.md";
  slug: "we-are-a-crowd-of-others";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
