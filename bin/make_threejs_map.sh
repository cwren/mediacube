#!/usr/bin/env bash

mkdir ppm

# components
jpegtopnm images/light.jpeg > ppm/light.ppm
jpegtopnm images/dark.jpeg > ppm/dark.ppm

# front
cp images/light.jpeg images/f.jpeg
# top
jpegtopnm images/light.jpeg | pamflip -rotate270 | pnmtojpeg > images/t.jpeg
# right
jpegtopnm images/light.jpeg | pamflip -rotate90 | pnmtojpeg > images/r.jpeg
# left
cp images/dark.jpeg images/l.jpeg
# bottom
jpegtopnm images/dark.jpeg | pamflip -rotate90 | pnmtojpeg > images/b.jpeg
# back
jpegtopnm images/dark.jpeg | pamflip -rotate90 | pnmtojpeg > images/k.jpeg
