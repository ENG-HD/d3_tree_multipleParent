# d3_tree_multipleParent

{
  "workbench.colorTheme": "Monokai",
  "editor.fontSize": 14,
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.minimap.enabled": false,
  "workbench.editor.tabSizing": "shrink",
  "workbench.colorCustomizations": {
    "tab.activeBorder": "#00ff6a"
  },

  // vim https://blog.mamansoft.net/2018/09/17/vscode-satisfies-vimmer/
  // クリップボードとヤンクを共有「する」
  "vim.useSystemClipboard": true,
  "vim.hlsearch": true,
  "vim.visualstar": true,
  "vim.foldfix": true,
  "vim.easymotion": true,
  "vim.leader": "<space>",
  "vim.easymotionMarkerBackgroundColor": "rgba(0, 0, 0, 0.7)",
  "vim.easymotionMarkerForegroundColorOneChar": "pink",
  "vim.easymotionMarkerHeight": 24,
  "vim.easymotionMarkerYOffset": 5,
  // "vim.enableNeovim": true,
  // 挿入モードのキーバインド
  "vim.insertModeKeyBindings": [
    // jjで挿入モードから<Esc>
    { "before": ["j", "j"], "after": ["<Esc>"] }
  ],
  // ノーマルモードのキーバインド
  "vim.normalModeKeyBindings": [
    // 行頭行末への移動をH,Lに
    { "before": ["H"], "after": ["^"] },
    { "before": ["L"], "after": ["$"] },
    { "before": ["<C-k>"], "after": ["g", "b"] }
  ],
  "vim.visualModeKeyBindings": [{ "before": ["<C-k>"], "after": ["g", "b"] }],

  "terminal.integrated.shell.windows": "C:\\WINDOWS\\Sysnative\\cmd.exe",
  "files.eol": "\n",
  "files.autoGuessEncoding": true,
  "editor.minimap.showSlider": "always",
  "editor.minimap.renderCharacters": false,

  // ESLint
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  // Prettier
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // スニペットを候補の上部に表示する
  "editor.snippetSuggestions": "top",
  // プレフィックスが一致する場合はスニペットを挿入する
  "editor.tabCompletion": "on",

  // Python
  "python.linting.pylintEnabled": false,
  "python.linting.flake8Enabled": true,
  "python.linting.lintOnSave": true,
  "python.formatting.provider": "autopep8"
}
