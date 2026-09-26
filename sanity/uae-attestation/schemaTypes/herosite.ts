import { defineField, defineType } from "sanity";

export default defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "document",

  fields: [
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),

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
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
  },
});