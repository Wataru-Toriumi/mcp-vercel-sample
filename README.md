# my-mcp-demo

簡単なデモを載せたリポジトリ

## Implemented Tools

### UUID Generator (`uuid_generator`)

このツールは 1 つ以上の UUID を生成します。

- **説明:** UUID を生成します
- **パラメータ:**
  - `num` (オプション, 数値, デフォルト: 1): 生成する UUID の数。1 以上である必要があります。
- **出力:**
  - 生成された UUID のコンマ区切り文字列。

## テスト

テストコードは `scripts` ディレクトリに格納されています。

テストを実行するには、以下のコマンドを使用します。

```bash
node scripts/test-client.mjs
node scripts/test-http-client.mjs
```
