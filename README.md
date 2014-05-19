# This is are sources used in talk 'Relaxing the Same Origin Policy'

## Install
```
npm install
```

## Launch
```
node app
```

## Configure your hosts
Add following lines to your hosts file
In *NIX system ```/etc/hosts```

```
# Host
127.0.0.1 www.site1.local
127.0.0.1 store.site1.local
127.0.0.1 api.site2.local
```
## Unrelaxed SOP

Open in your browser and go to the index page

```
http://www.site1.local:3000/
```

Using your broweser take a look at the console what's go under the hood and pay particular attention to the HTTP Headers of requests and responses.

### Same Origin Policy in action
```
http://www.site1.local:3000/unrelaxed.html
```

### ```document.domain``` in action
```
http://www.site1.local:3000/relaxed.domain.html
```

### ```postMessage``` a.k.aa Cross-Document messaging
```
http://www.site1.local:3000/relaxed.message.html
```

### JSONP
```
http://www.site1.local:3000/relaxed.jsonp.html
```

### CORS
```
http://www.site1.local:3000/relaxed.cors.html
```

