# Run this from inside the portfolio-repo folder (PowerShell).
# It pushes this project to your existing GitHub repo and
# asks for your token locally -- it is never written to disk or sent anywhere else.

$ErrorActionPreference = "Stop"

$ghUser = "abdalkarimkehail-oss"
$ghRepo = "portfolio-"

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "Git is not installed. Install it from https://git-scm.com/downloads and re-run this script."
    exit 1
}

$secureToken = Read-Host "Paste your GitHub token (input hidden)" -AsSecureString
$bstr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secureToken)
$token = [Runtime.InteropServices.Marshal]::PtrToStringAuto($bstr)
[Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstr)
$token = $token.Trim()

if (-not (Test-Path ".git")) {
    git init | Out-Null
}

git add -A
git commit -m "Initial portfolio" 2>$null

git branch -M main

$plainUrl = "https://github.com/$ghUser/$ghRepo.git"

if (git remote | Select-String -Quiet "^origin$") {
    git remote set-url origin $plainUrl
} else {
    git remote add origin $plainUrl
}

$basicAuth = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("$ghUser`:$token"))

Write-Host "Pushing to $plainUrl ..."
git -c http.extraheader="AUTHORIZATION: basic $basicAuth" push origin main --force
$pushExitCode = $LASTEXITCODE

# Clear the token from memory/variables in this session
$token = $null
$basicAuth = $null

if ($pushExitCode -ne 0) {
    Write-Host ""
    Write-Host "Push failed (exit