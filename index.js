set -e
cd "$(dirname "$0")"/..
source ci/_
sudo chmod 0777 ci/buildkite-pipeline-in-disk.sh

_ ci/buildkite-pipeline-in-disk.sh pipeline.yml
echo +++ pipeline
