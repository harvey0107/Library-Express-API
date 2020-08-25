#!/bin/bash
API="https://library-express-api.herokuapp.com"
URL_PATH="/books"
curl  "${API}${URL_PATH}"\
  --include \
  --request GET \
echo
