# WebRTC Signaling Experiment
### WebRTC Signaling server experiment in TypeScript.

<br>

---

<br>
<br>

#### Start the Development Environment:
##### Step 1:
```
npm run prettier-watch
```

##### Step 2:
```
npm run ts-watch
```

##### Step 3:
```
npm run webpack
```

##### Step 4:
```
npm run dev
```

<br>
<br>

---

<br>
<br>

#### Generate the HTTPS Key and Certificate:
##### Step 1:
```
npx mkcert create-ca
```


##### Step 2:
```
npx mkcert create-cert
```

<br>
<br>
<br>

**NOTE:**   
1. <small>ICE Candidates gathering should start right after the setting of Local Description is finished.</small>