import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'shortDescription',
      type: 'text',
      required: true,
    },
    {
      name: 'startedAt',
      type: 'date',
    },
    {
      name: 'deadlineAt',
      type: 'date',
    },
    {
      name: 'releasedAt',
      type: 'date',
    },
    {
      name: 'fullDescription',
      type: 'richText',
      required: true,
    },
    {
      name: 'estimate',
      type: 'richText',
    },
    {
      name: 'ideas',
      type: 'relationship',
      relationTo: 'ideas',
      hasMany: true,
    },
    {
      name: 'tasks',
      type: 'relationship',
      relationTo: 'tasks',
      hasMany: true,
    },
    {
      name: 'members',
      type: 'relationship',
      relationTo: 'members',
      hasMany: true,
    },
  ],
}