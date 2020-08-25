API="https://library-express-api.herokuapp.com"
URL_PATH="/librarians"

curl "${API}${URL_PATH}/${ID}" \
--include \
--request DELETE \

echo
