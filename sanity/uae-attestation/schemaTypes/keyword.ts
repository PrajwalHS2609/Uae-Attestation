import { defineField, defineType } from "sanity";

export default defineType({
  name: "homeHeaderContent",
  title: "Home Header Content",
  type: "document",

  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),

    defineField({
      name: "paragraph1",
      title: "Paragraph 1",
      type: "text",
    }),

    defineField({
      name: "paragraph2",
      title: "Paragraph 2",
      type: "text",
    }),
  ],

  preview: {
    select: {
      title: "heading",
    },
  },
});

