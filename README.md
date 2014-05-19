# Sources used in the talk 'Relaxing the Same Origin Policy'

I gave this talk to the RomaJS community in april 2014.
Slides available at https://speakerdeck.com/marcoloche/relaxing-the-same-origin-policy
## Install
```
npm install
```
## Configure your hosts
Add following lines to your hosts file
In *NIX system ```/etc/hosts``` :

```
127.0.0.1 www.site1.local
127.0.0.1 store.site1.local
127.0.0.1 api.site2.local
```
## Launch
```
node app
```

Open in your browser and go to the index page

```
http://www.site1.local:3000/
```

Using the console of your favourite broweser take a look what's going on under the hood and pay particular attention to the HTTP Headers of requests and responses.

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

