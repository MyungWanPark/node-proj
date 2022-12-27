const path = require('path');
const fs = require('fs');
const os = require('os');

const folder = process.argv[2];
const fullPath = path.join(os.homedir(), 'Downloads', 'images', folder);

if (!folder || !fs.existsSync(fullPath)) {
  console.error('폴더명 또는 경로를 바로 입력해주세요');
  return;
}

const capturedFolder = path.join(fullPath, 'captured');
const videosFolder = path.join(fullPath, 'videos');
const duplicatedFolder = path.join(fullPath, 'duplicated');
!fs.existsSync(capturedFolder) && fs.mkdirSync(capturedFolder);
!fs.existsSync(videosFolder) && fs.mkdirSync(videosFolder);
!fs.existsSync(duplicatedFolder) && fs.mkdirSync(duplicatedFolder);

fs.promises
  .readdir(fullPath) //
  .then(processFiles)
  .catch(console.error);

function processFiles(files) {
  files.forEach((file) => {
    if (isVideoFile(file)) {
      move(file, videosFolder);
      return;
    }
    if (isCapturedFile(file)) {
      console.log(file);
      move(file, capturedFolder);
      return;
    }
    if (isDuplicatedFile(files, file)) {
      console.log(file);
      move(file, duplicatedFolder);
      return;
    }
  });
}

function isVideoFile(file) {
  const regExp = /(mp4|mov)$/gm;
  const match = file.match(regExp);
  return !!match;
}
function isCapturedFile(file) {
  const regExp = /(png|aae)$/gm;
  const match = file.match(regExp);
  return !!match;
}
function isDuplicatedFile(files, file) {
  if (!file.startsWith('IMG_E')) {
    return false;
  }
  const found = files.find((f) => f.includes('IMG_E'));
  return !!found;
}

function move(file, targetDir) {
  const oldPath = path.join(fullPath, file);
  const newPath = path.join(targetDir, file);
  fs.promises.rename(oldPath, newPath); //
  console.info(`${file} go to ${path.basename(targetDir)}`);
}
