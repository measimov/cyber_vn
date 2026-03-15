# cyber_vn

视觉小说项目开发环境骨架已建立。

## 目录

- `docs/`：设计文档与流程说明
- `tools/`：本地开发与资源处理脚本
- `assets/`：图片、音频、视频等资源
- `data/`：剧情、配置、结构化数据
- `game/`：游戏运行时代码与内容

## 系统依赖

当前机器已检测到：

- Homebrew
- git
- python3
- node
- ffmpeg
- ImageMagick
- ripgrep
- jq

缺失时可用：

```bash
brew install git python node ffmpeg imagemagick ripgrep jq
```

Homebrew 缺失时可先执行：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Python 工具链

当前项目已存在 `.venv`。如需重新创建：

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install pillow pyyaml
```

推荐最小 pip 包：

- `pillow`
- `pyyaml`

## 验证

执行：

```bash
./setup_check.sh
```

如果输出全部为 `OK`，则本机开发依赖齐全。
