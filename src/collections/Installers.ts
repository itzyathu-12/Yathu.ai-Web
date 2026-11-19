import type { CollectionConfig } from 'payload'
import { revalidateTag } from 'next/cache'

import { YATHU_DOWNLOAD_TAG } from '@/lib/cache-tags'

const isPayloadAdmin = ({ req }: { req: { user?: { collection?: string } | null } }) =>
  req.user?.collection === 'admins'

export const Installers: CollectionConfig = {
  slug: 'installers',
  labels: {
    singular: 'Windows Installer',
    plural: 'Windows Installers',
  },
  admin: {
    group: 'Yathu.ai',
    useAsTitle: 'filename',
    description:
      'Upload Windows .exe releases here, then select the active release in Download Settings.',
  },
  access: {
    create: isPayloadAdmin,
    delete: isPayloadAdmin,
    read: () => true,
    update: isPayloadAdmin,
  },
  fields: [
    {
      name: 'releaseLabel',
      type: 'text',
      admin: {
        description: 'Optional internal label, such as “Stable 1.0.0”.',
      },
    },
  ],
  hooks: {
    afterChange: [
      () => {
        revalidateTag(YATHU_DOWNLOAD_TAG, 'max')
      },
    ],
    afterDelete: [
      () => {
        revalidateTag(YATHU_DOWNLOAD_TAG, 'max')
      },
    ],
  },
  upload: {
    mimeTypes: [
      'application/octet-stream',
      'application/x-msdownload',
      'application/vnd.microsoft.portable-executable',
    ],
    modifyResponseHeaders: ({ headers }) => {
      headers.set('Cache-Control', 'public, max-age=3600, s-maxage=3600')
      return headers
    },
  },
}
