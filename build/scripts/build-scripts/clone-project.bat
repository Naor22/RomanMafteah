@echo off

echo.
echo Cloning GIT repositories...
git clone --quiet --single-branch --branch main git@gitlab.com:naor2231/romanmafteah.git
echo.
echo Cleaning up development code from server...
pushd %PROJECT_NAME%
rd ".git" /S /Q
popd

exit /B 1
