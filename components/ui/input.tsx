import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef((props: any, ref: any) => {
  return (
    <input
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
