import { Environment, FileDescriptor } from '../src/application'
import { Nordea } from '../src/pankkiyhteys'
import { Key } from '../src/trust'
import { readFile } from './utils'

describe('E2e test Nordea client', () => {
  let key!: Key

  beforeAll(async () => {
    const [privateKey, certificate] = await Promise.all([
      readFile('data/Nordea_key.pem'),
      readFile('data/Nordea_certificate.pem')
    ])

    key = new Key(privateKey, certificate)
  })

  test('Should return list of files.', async () => {
    // NOTE: This test makes actual API calls to Nordea with their test account.
    // https://www.nordea.fi/en/business/our-services/mobile-online-services/testing.html#tab=Web-Services

    const client = new Nordea('11111111', key, 'EN', Environment.TEST)

    client.certService.addIntermediaryCertificates = jest
      .fn()
      .mockRejectedValueOnce('Should not happen')

    const TargetId = '11111111A1'
    const FileType = 'VKEUR'

    const fileList = await client.getFileList({
      TargetId,
      FileType,
      Status: 'ALL'
    })

    const expectedItem: FileDescriptor = {
      FileReference: expect.any(Number),
      TargetId,
      ServiceId: TargetId,
      FileType,
      FileTimestamp: expect.any(String),
      Status: 'NEW'
    }

    expect(fileList).toEqual([expectedItem])
  })
})
