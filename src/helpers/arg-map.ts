export interface CLIArgument {
  name: string;
  key: string;
  long_form: string;
  short_form?: string;
  description: string;
  value?: string;
  default?: string;
}

export const CLIArgumentMap: Array<CLIArgument> = [
  {
    name: "Configuration",
    key: "config",
    long_form: "config",
    short_form: "c",
    description: "Path to configuration file.",
    value: "path",
  },
  {
    name: "Output",
    key: "outputDirectory",
    long_form: "output",
    short_form: "o",
    description: "Path to the output directory.",
    value: "path",
    default: "./til",
  },
  {
    name: "Stylesheet",
    key: "stylesheet",
    long_form: "stylesheet",
    short_form: "s",
    description: "Path to the stylesheet.",
    value: "path",
  },
  {
    name: "Extension",
    key: "extension",
    long_form: "extension",
    short_form: "e",
    description:
      "Extension for the files in the input directory. (Ignored if input is file)",
    value: "extension",
    default: "txt",
  },
  {
    name: "Language",
    key: "language",
    long_form: "lang",
    short_form: "l",
    description: "Language used for HTML lang attribute.",
    value: "string",
    default: "en",
  },
  {
    name: "Title",
    key: "title",
    long_form: "title",
    description: "Title for the generated HTML file.",
    value: "string",
  },
  {
    name: "Meta Author",
    key: "author",
    long_form: "author",
    description: "Author meta tag for the generated HTML file.",
    value: "string",
  },
  {
    name: "Meta Description",
    key: "description",
    long_form: "description",
    description: "Description meta tag for the generated HTML file.",
    value: "string",
  },
  {
    name: "Meta Keywords",
    key: "keywords",
    long_form: "keywords",
    description: "Keywords meta tag for the generated HTML file.",
    value: "string",
  },
  {
    name: "Meta Rating",
    key: "rating",
    long_form: "rating",
    description: "Rating meta tag for the generated HTML file.",
    value: "string",
  },
  {
    name: "Meta Robots",
    key: "robots",
    long_form: "robots",
    description: "Robots meta tag for the generated HTML file.",
    value: "string",
  },
  {
    name: "Meta Generator",
    key: "generator",
    long_form: "generator",
    description: "Generator meta tag for the generated HTML file.",
    value: "string",
  },
  {
    name: "Meta Theme Color",
    key: "themeColor",
    long_form: "theme-color",
    description: "Theme color meta tag for the generated HTML file.",
    value: "string",
  },
];
