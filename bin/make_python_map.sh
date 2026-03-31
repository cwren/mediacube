#!/usr/bin/env bash

mkdir ppm

# components
ppmmake red 1024 1024 > ppm/python_map.ppm
jpegtopnm images/light.jpeg > ppm/light.ppm
jpegtopnm images/dark.jpeg > ppm/dark.ppm

# front
pnmpaste -replace ppm/light.ppm 256 256 ppm/python_map.ppm > ppm/tmp.ppm
mv ppm/tmp.ppm ppm/python_map.ppm
# top
pamflip -rotate270 ppm/light.ppm > ppm/light-top.ppm
pnmpaste -replace ppm/light-top.ppm 256 0 ppm/python_map.ppm > ppm/tmp.ppm
mv ppm/tmp.ppm ppm/python_map.ppm
# right
pamflip -rotate90 ppm/light.ppm > ppm/light-right.ppm
pnmpaste -replace ppm/light-right.ppm 512 256 ppm/python_map.ppm > ppm/tmp.ppm
mv ppm/tmp.ppm ppm/python_map.ppm
# left 
pnmpaste -replace ppm/dark.ppm 0 256 ppm/python_map.ppm > ppm/tmp.ppm
mv ppm/tmp.ppm ppm/python_map.ppm
# bottom
pnmpaste -replace ppm/dark.ppm 256 512 ppm/python_map.ppm > ppm/tmp.ppm
mv ppm/tmp.ppm ppm/python_map.ppm
# back
pnmpaste -replace ppm/dark.ppm 256 768 ppm/python_map.ppm > ppm/tmp.ppm
mv ppm/tmp.ppm ppm/python_map.ppm

# output
pnmtojpeg ppm/python_map.ppm > images/python_map.jpeg 

# cleanup
rm -rf ppm
