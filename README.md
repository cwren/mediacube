brew install --cask docker
open /Applications/Docker.app
git clone https://github.com/isl-org/Open3D.git
cd Open3D/docker
./docker_build.sh openblas-amd64-py314

softwareupdate --install-rosetta

