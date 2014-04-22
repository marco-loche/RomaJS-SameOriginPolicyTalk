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
127.0.0.1 www.site2.local
```
## Unrelaxed SOP

Open in your browser

### Unrelaxed normal Same Origin Policy
http://www.site.local/unrelaxed.html

### Relaxed by usage of ```document.domain```
http://www.site.local/relaxed.domain.html