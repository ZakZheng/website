import Link from 'next/link';
import { Button } from 'antd';

export default ({ children }: any) => (
  <>
    <header>
      <Link href="/a?id=1" as="/a/1">
        <Button>Index</Button>
      </Link>
    </header>
    {children}
  </>
);
