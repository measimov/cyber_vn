#!/usr/bin/env bash

set -u

check_cmd() {
  local label="$1"
  local cmd="$2"
  if command -v "$cmd" >/dev/null 2>&1; then
    printf '[OK] %s: %s\n' "$label" "$(command -v "$cmd")"
  else
    printf '[MISSING] %s\n' "$label"
  fi
}

echo 'Checking system dependencies...'
check_cmd 'Homebrew' 'brew'
check_cmd 'git' 'git'
check_cmd 'python3' 'python3'
check_cmd 'node' 'node'
check_cmd 'ffmpeg' 'ffmpeg'
check_cmd 'ImageMagick' 'magick'
check_cmd 'ripgrep' 'rg'
check_cmd 'jq' 'jq'

if [ -d ".venv" ]; then
  echo '[OK] .venv directory exists'
else
  echo '[MISSING] .venv directory'
fi
