export GITHUB_REF_NAME="71-cicd-automatic-deployment-for-prs"
export PREVIEW_SLUG=$GITHUB_REF_NAME

echo $PREVIEW_SLUG

# ansible-galaxy install stephdewit.nvm
ansible-playbook -i hosts/staging --diff preview.yml -u root