# Instructions
- Get the gcp-key
### Local
Node 11
```
mv /path/to/gcp-key.json ./gcp-key.json
npm install
npm run chat [your_name]
```
### Docker
```
mv /path/to/gcp-key.json ./gcp-key.json
docker build . -t capchat
docker run -it capchat npm run chat [your_name]
```
