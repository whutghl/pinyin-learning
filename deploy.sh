#!/bin/sh

npm run build
CURRENT_DATETIME=$(date +"%Y%m%d%H%M%S")
TAR_FILENAME="dist_${CURRENT_DATETIME}.tar.gz"

tar -cvzf "$TAR_FILENAME" dist

scp "$TAR_FILENAME" genghailong@hspy:/app/pinyin/

# 通过ssh登录并执行命令
ssh genghailong@hspy << EOF
  # 在这里添加你要在远程服务器上执行的命令
  cd /app/pinyin/
  rm -rf ./dist
  tar -xvzf "$TAR_FILENAME"
  echo "success!"
EOF

rm "$TAR_FILENAME"