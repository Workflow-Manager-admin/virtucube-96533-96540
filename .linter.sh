#!/bin/bash
cd /home/kavia/workspace/code-generation/virtucube-96533-96540/main_container_for_virtucube
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

