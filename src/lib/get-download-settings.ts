import config from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

import { YATHU_DOWNLOAD_TAG } from '@/lib/cache-tags'

export type PublicDownloadSettings = {
  fileName: string | null
  fileSize: string | null
  releaseNote: string | null
  url: string | null
  version: string | null
}

const readDownloadSettings = async (): Promise<PublicDownloadSettings> => {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({
    slug: 'download-settings',
    depth: 1,
    overrideAccess: false,
  })

  const installer =
    settings.installer && typeof settings.installer === 'object' ? settings.installer : null

  return {
    fileName: installer?.filename ?? null,
    fileSize: settings.fileSize ?? null,
    releaseNote: settings.releaseNote ?? null,
    url: installer?.url ?? null,
    version: settings.version ?? null,
  }
}

export const getDownloadSettings = unstable_cache(
  readDownloadSettings,
  ['yathu-download-settings'],
  { tags: [YATHU_DOWNLOAD_TAG] },
)
