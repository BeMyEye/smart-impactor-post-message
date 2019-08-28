# Smart Impactor post message

Install
------------
```
npm install BeMyEye/smart-impactor-post-message
```

Usage
------------
``` typescript
import { smartImpactorPostMessage } from 'smart-impactor-post-message'; 

smartImpactorPostMessage.init('https://pro.bemyeye.com');
```

Available functions
---------------

**onSubmitSuccess**

``` typescript
smartImpactorPostMessage.onSubmitSuccess();
```

**onSubmitError**
``` typescript
smartImpactorPostMessage.onSubmitError('Error message');
```
