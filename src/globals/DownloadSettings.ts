import type { GlobalConfig } from 'payload'
import { revalidateTag } from 'next/cache'

import { YATHU_DOWNLOAD_TAG } from '@/lib/cache-tags'

const isPayloadAdmin = ({ req }: { req: { user?: { collection?: string } | null } }) =>
  req.user?.collection === 'admins'

export const DownloadSettings: GlobalConfig = {
  slug: 'download-settings',
  label: 'Download Settings',
  admin: {
    group: 'Yathu.ai',
    description: 'Choose the Windows installer shown on the Yathu.ai website.',
  },
  access: {
    read: () => true,
    update: isPayloadAdmin,
  },
  fields: [
    {
      name: 'installer',
      type: 'upload',
      relationTo: 'installers',
      admin: {
        description: 'The .exe file visitors receive from the main download button.',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'version',
          type: 'text',
          admin: {
            placeholder: '1.0.0',
            width: '50%',
          },
        },
        {
          name: 'fileSize',
          type: 'text',
          admin: {
            placeholder: '84 MB',
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'releaseNote',
      type: 'textarea',
      admin: {
        description: 'A short note displayed beside the current release.',
        placeholder: 'A calmer, faster Yathu with improved voice activation.',
      },
    },
  ],
  hooks: {
    afterChange: [
      () => {
        revalidateTag(YATHU_DOWNLOAD_TAG, 'max')
      },
    ],
  },
}
