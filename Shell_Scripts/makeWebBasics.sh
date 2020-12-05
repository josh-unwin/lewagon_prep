for f in "$@"
do
  cd "$(dirname "$f")"

  cwd=$(pwd)

  echo $cwd

  if [ -f "$cwd"/index.html ] || [ -f "$cwd"/style.css ] || [ -f "$cwd"/script.js ]; then
      echo "A file already exists, stopping."
  else

  touch style.css
  touch index.html
  touch script.js

  read -d '' html << EOF
  <!doctype html>

  <html lang="en">
  <head>
    <meta charset="utf-8">

    <title>Page Title</title>
    <meta name="description" content="Page Description">
    <meta name="author" content="Josh Unwin">

    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
  </head>

  <body>
  </body>
  </html>
EOF

  read -d '' css << EOF
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
EOF

  echo "$html" > index.html
  echo "$css" > style.css

  sublime "$cwd"

  fi
done