npm init -y
npm install aws-sdk dayjs uuid --save

# Install AWS-cli
msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi # windows

# Set path for AWS
$command = "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12"
Invoke-Expression $command
Invoke-WebRequest -Uri "https://awscli.amazonaws.com/AWSCLIV2.msi" -Outfile C:\AWSCLIV2.msi
$arguments = "/i `"C:\AWSCLIV2.msi`" /quiet"
Start-Process msiexec.exe -ArgumentList $arguments -Wait
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine")
aws --version
aws s3 ls

# Configure AWS
aws configure


npm install -g expo-cli --force
npm install truffle -g


