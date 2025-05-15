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
pnpm run test:sse
pnpm run test:http
```

また、`@modelcontextprotocol/inspector` も使用できます。
以下のコマンドで Inspector を起動できます。

```bash
pnpm run debug:inspector
```

起動したら、Connect することで、Tool を利用することができます。
