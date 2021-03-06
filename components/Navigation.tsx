import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <Link href="/">
        <a className="text-gray-900 dark:text-white pr-3 py-4">Home</a>
      </Link>
      <Link href="/research">
        <a className="text-gray-900 dark:text-white px-3 py-4">Research</a>
      </Link>
			<Link href="/explore">
        <a className="text-gray-900 dark:text-white px-3 py-4">Mind Matrix</a>
      </Link>
    </nav>
  );
};

export default Navigation;
