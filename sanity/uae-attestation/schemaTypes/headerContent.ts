import { defineField, defineType } from "sanity";

export default defineType({
  name: "homeHeaderContent",
  title: "Home Header Content",
  type: "document",

  fields: [
    // Main Content
    defineField({
      name: "mainTitle",
      title: "Main Title",
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

    // Highlight Section
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [
        defineField({
          name: "highlight",
          title: "Highlight",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),

            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),

            defineField({
              name: "note",
              title: "Note",
              type: "string",
            }),
          ],
        }),
      ],
    }),

    // USP Section
    defineField({
      name: "uspTitle",
      title: "USP Title",
      type: "string",
    }),

    defineField({
      name: "usps",
      title: "USPs",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "mainTitle",
      subtitle: "uspTitle",
    },
  },
});
