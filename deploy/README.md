## Cài đặt môi trường

Hệ điều hành Ubuntu 18.04 LTS, chưa kiểm tra trên Window
Cấu hình tối thiểu RAM 4GB, 2CPU.

```
$ docker --version
Docker version 19.03.5, build 633a0ea838
$ docker-compose --version
docker-compose version 1.18.0, build 8dd22a9
```

## Chạy Single Node Hyperledger Sawtooth

```
$ docker-compose up
```

## Chạy lại nếu gặp lỗi

```
sawtooth-shell-default | file exists: /root/.sawtooth/keys/root.priv
sawtooth-shell-default | file exists: /root/.sawtooth/keys/root.pub
sawtooth-shell-default | Error: files exist, rerun with --force to overwrite existing files
sawtooth-shell-default exited with code 1
```

Chạy lại lệnh

```
$ docker-compose up --force
```

Check network hoạt động

```
$ curl http://localhost:8008/blocks

{
  "data": [
    {
      "batches": [
        {
          "header": {
            "signer_public_key": "03e625fceade7ec74a4359015e87e72f8c01c6385827db428f8f10e93ebbb17ab1",
            "transaction_ids": [
              "0bb1d88959ffdfdb34637ab4fff7efa97de8464448690d4ad587c17b4e456ee926cf6ef08f82cf407d84015b617ada53401f7733c29094257c0a6595d19b24d7"
            ]
          },
          "header_signature": "a5e44c2e6952bce6e42acbc14b789a4bb693e0a96d5193e69ab7f29f27b7a6bb0a3a40644020e5df917d7c83f2db7152fcfa64b658d0d70e1d88e1ccb4a98040",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03e625fceade7ec74a4359015e87e72f8c01c6385827db428f8f10e93ebbb17ab1",
                "dependencies": [],
                "family_name": "sawtooth_settings",
                "family_version": "1.0",
                "inputs": [
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7",
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1918142591ba4e8a7",
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7"
                ],
                "nonce": "",
                "outputs": [
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7"
                ],
                "payload_sha512": "64365531aca9d135dcf1559e9436decaaa8fd27269bf1569fb90a5d83c81d5e3a15dc5bea959b98524af07f774e48754e0d47230c878803f279111205aab6b5e",
                "signer_public_key": "03e625fceade7ec74a4359015e87e72f8c01c6385827db428f8f10e93ebbb17ab1"
              },
              "header_signature": "0bb1d88959ffdfdb34637ab4fff7efa97de8464448690d4ad587c17b4e456ee926cf6ef08f82cf407d84015b617ada53401f7733c29094257c0a6595d19b24d7",
              "payload": "CAESgAEKJnNhd3Rvb3RoLnNldHRpbmdzLnZvdGUuYXV0aG9yaXplZF9rZXlzEkIwM2U2MjVmY2VhZGU3ZWM3NGE0MzU5MDE1ZTg3ZTcyZjhjMDFjNjM4NTgyN2RiNDI4ZjhmMTBlOTNlYmJiMTdhYjEaEjB4YTI1Y2MzYmNhN2Q4ZWE0NA=="
            }
          ]
        },
        {
          "header": {
            "signer_public_key": "03e625fceade7ec74a4359015e87e72f8c01c6385827db428f8f10e93ebbb17ab1",
            "transaction_ids": [
              "8b1e691c1bd15660962fe3c683c7121661f9ebdba34651d6b4828dc7389df42a00d8001331e98c679c38e51109b4376e94dcec4c093f075805d335752cc06a37",
              "eeabfae4624ae290cbf8f16c786f4aac710da462728f863a1555c0437d0bc561411c029cb3a551ca986b78e2b53ad7d285aaf71bb7fd214ad3e4803fe8304275"
            ]
          },
          "header_signature": "df661479119daf9f0927e46c74de3c288272cfb539b788dd7d0e92c0049057dd0142542bf973014673ce06291b996f8a68a528e290a43b9845cf5285b080f30f",
          "trace": false,
          "transactions": [
            {
              "header": {
                "batcher_public_key": "03e625fceade7ec74a4359015e87e72f8c01c6385827db428f8f10e93ebbb17ab1",
                "dependencies": [],
                "family_name": "sawtooth_settings",
                "family_version": "1.0",
                "inputs": [
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7",
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1918142591ba4e8a7",
                  "000000a87cb5eafdcca6a8c983c585ac3c40d9b1eb2ec8ac9f31ff82a3537ff0dbce7e"
                ],
                "nonce": "",
                "outputs": [
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
                  "000000a87cb5eafdcca6a8c983c585ac3c40d9b1eb2ec8ac9f31ff82a3537ff0dbce7e"
                ],
                "payload_sha512": "a1ce7a0be27764ceb165ad743776ca7c654ee6823334c62dec1a8816fade4e44f6034d6c6e6ee0f0a68df6be89eb0148f217968608917b462a2b710d5e078d5c",
                "signer_public_key": "03e625fceade7ec74a4359015e87e72f8c01c6385827db428f8f10e93ebbb17ab1"
              },
              "header_signature": "8b1e691c1bd15660962fe3c683c7121661f9ebdba34651d6b4828dc7389df42a00d8001331e98c679c38e51109b4376e94dcec4c093f075805d335752cc06a37",
              "payload": "CAESQAohc2F3dG9vdGguY29uc2Vuc3VzLmFsZ29yaXRobS5uYW1lEgdEZXZtb2RlGhIweDY0ZDY5Y2VmYWVmNWQ0ZTY="
            },
            {
              "header": {
                "batcher_public_key": "03e625fceade7ec74a4359015e87e72f8c01c6385827db428f8f10e93ebbb17ab1",
                "dependencies": [],
                "family_name": "sawtooth_settings",
                "family_version": "1.0",
                "inputs": [
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c12840f169a04216b7",
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1918142591ba4e8a7",
                  "000000a87cb5eafdcca6a8c983c585ac3c40d9b1eb2ec8ac9f31ff5ca4f3850ccc331a"
                ],
                "nonce": "",
                "outputs": [
                  "000000a87cb5eafdcca6a8cde0fb0dec1400c5ab274474a6aa82c1c0cbf0fbcaf64c0b",
                  "000000a87cb5eafdcca6a8c983c585ac3c40d9b1eb2ec8ac9f31ff5ca4f3850ccc331a"
                ],
                "payload_sha512": "ddbf220d3ed27c04a1d90e54a06ded8389a4b394cc27dcd84dd2ef9e90b01eeff585b460b2696f72876da215af16fb77e20732e75ba1782d21fac0c21f6c8040",
                "signer_public_key": "03e625fceade7ec74a4359015e87e72f8c01c6385827db428f8f10e93ebbb17ab1"
              },
              "header_signature": "eeabfae4624ae290cbf8f16c786f4aac710da462728f863a1555c0437d0bc561411c029cb3a551ca986b78e2b53ad7d285aaf71bb7fd214ad3e4803fe8304275",
              "payload": "CAESPwokc2F3dG9vdGguY29uc2Vuc3VzLmFsZ29yaXRobS52ZXJzaW9uEgMwLjEaEjB4OGFkOGRhYTgwNWIyOWU3Yw=="
            }
          ]
        }
      ],
      "header": {
        "batch_ids": [
          "a5e44c2e6952bce6e42acbc14b789a4bb693e0a96d5193e69ab7f29f27b7a6bb0a3a40644020e5df917d7c83f2db7152fcfa64b658d0d70e1d88e1ccb4a98040",
          "df661479119daf9f0927e46c74de3c288272cfb539b788dd7d0e92c0049057dd0142542bf973014673ce06291b996f8a68a528e290a43b9845cf5285b080f30f"
        ],
        "block_num": "0",
        "consensus": "R2VuZXNpcw==",
        "previous_block_id": "0000000000000000",
        "signer_public_key": "03d9c7732440a2df0c6196213bbd40fa5c6be7be302caa6619b33bcc63d5c5f238",
        "state_root_hash": "95b18521cf0e4fc935ab177c21aa1790a9aa2e36109798a11b3e287a94c4b7b7"
      },
      "header_signature": "767bbc21d52f248a5689b13bedb578655106686648ce24cce0770c0ee7130304450eda43b6d8373942eb45ddd76eee6e511b88656bbf49cbb947cab162435f00"
    }
  ],
  "head": "767bbc21d52f248a5689b13bedb578655106686648ce24cce0770c0ee7130304450eda43b6d8373942eb45ddd76eee6e511b88656bbf49cbb947cab162435f00",
  "link": "http://localhost:8008/blocks?head=767bbc21d52f248a5689b13bedb578655106686648ce24cce0770c0ee7130304450eda43b6d8373942eb45ddd76eee6e511b88656bbf49cbb947cab162435f00&start=0x0000000000000000&limit=100",
  "paging": {
    "limit": null,
    "start": null
  }
}
```

Nếu đợi lâu không thấy kết quả trả về thì server bị lỗi chạy lại lệnh trên.

## Cấp quyền cho thư mục keys

```
sudo chown -R $USER .sawtooth/keys
```
