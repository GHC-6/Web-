采用 ECMAScript 6 模块如何导出导入？
---------------------------------
* 导出 export：
``` 
 export function foo(){..}; 
 export var baz = 4; 
 var bar = [1,2,3]; 
 export { bar }; 
 ```

* 导入 import ：
```
import {foo} from "foo";
foo();

import {foo as thefoofunc} from "foo";
thefoofunc();
```
