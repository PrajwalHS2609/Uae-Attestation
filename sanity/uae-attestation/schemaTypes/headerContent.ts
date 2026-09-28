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
      name: "paragraphs",
      title: "Paragraphs",
      type: "array",
      of: [
        {
          type: "text",
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "heading",
    },
  },
});