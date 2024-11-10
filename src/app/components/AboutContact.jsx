import Link from 'next/link';
import React from 'react';

const AboutContact = () => {
    return (
      <div>
        <ul className="flex space-x-3 py-2">
          <li className="text-lg font-bold text-cyan-950">
            <Link href="/about/history">History</Link>
          </li>
          <li className="text-lg font-bold text-cyan-950">
            <Link href="/about/mission">Mission</Link>
          </li>
        </ul>
      </div>
    );
};

export default AboutContact;