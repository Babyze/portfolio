import Link from "next/link";

function Logo() {
  return (
    <Link href="#">
      <div className="triangle w-20 flex items-center justify-center">
        <div className="logo-text text-3xl pr-5">HA</div>
      </div>
    </Link>
  );
}

export default Logo;
