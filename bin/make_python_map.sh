#!/usr/bin/env bash

mkdir ppm

# components
ppmmake red 1024 1024 > ppm/python_map.ppm
jpegtopnm images/light.jpeg > ppm/light.ppm
jpegtopnm images/dark.jpeg > ppm/dark.ppm

# front
cat ppm/light.ppm > ppm/front.ppm
pnmpaste -replace ppm/front.ppm 256 256 ppm/python_map.ppm > ppm/tmp.ppm
mv ppm/tmp.ppm ppm/python_map.ppm
# top
pamflip -rotate270 ppm/light.ppm > ppm/top.ppm
pnmpaste -replace ppm/top.ppm 256 0 ppm/python_map.ppm > ppm/tmp.ppm
mv ppm/tmp.ppm ppm/python_map.ppm
# right
pamflip -rotate90 ppm/light.ppm > ppm/right.ppm
pnmpaste -replace ppm/right.ppm 512 256 ppm/python_map.ppm > ppm/tmp.ppm
mv ppm/tmp.ppm ppm/python_map.ppm
# left 
cat ppm/dark.ppm > ppm/left.ppm
pnmpaste -replace ppm/left.ppm 0 256 ppm/python_map.ppm > ppm/tmp.ppm
mv ppm/tmp.ppm ppm/python_map.ppm
# bottom
pamflip -rotate90 ppm/dark.ppm > ppm/bottom.ppm
pnmpaste -replace ppm/bottom.ppm 256 512 ppm/python_map.ppm > ppm/tmp.ppm
mv ppm/tmp.ppm ppm/python_map.ppm
# back
pamflip -rotate270 ppm/dark.ppm > ppm/back.ppm
pnmpaste -replace ppm/back.ppm 256 768 ppm/python_map.ppm > ppm/tmp.ppm
mv ppm/tmp.ppm ppm/python_map.ppm

# output
pnmtojpeg ppm/python_map.ppm > images/python_map.jpeg 

# cleanup
rm -rf ppm
