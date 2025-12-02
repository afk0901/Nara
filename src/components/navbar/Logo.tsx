import Image from "next/image";

import Link from "next/link";

export default function Logo() {
  return (
    <div className="
                fixed 
                top-4 
                left-4 
                w-20 h-20
                rounded-full 
                overflow-hidden">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Nara Logo"
            priority
            fill
          />
        </Link>
      </div>
  );
}

