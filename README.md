# Instructions
- Get the gcp-key
### Local
```
mv ~/Downloads/gcp-key.json ./gcp-key.json
npm install
node chat.js [your_name]
```
### Docker
```
mv ~/Downloads/gcp-key.json ./gcp-key.json
docker build . -t capchat
docker run -it capchat node chat.js [your_name]
```
