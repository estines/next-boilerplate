import Link from "next/link";
import { useSelector } from "react-redux";

import Counter from "./Counter";
import Clock from "./Clock";

function Page({
  linkTo,
  NavigateTo,
  title,
}: {
  linkTo: string;
  NavigateTo: string;
  title: string;
}) {
  const placeholderData = useSelector((state: any) => state.placeholderData);
  const error = useSelector((state: any) => state.error);
  const light = useSelector((state: any) => state.light);
  const lastUpdate = useSelector((state: any) => state.lastUpdate);

  return (
    <div>
      <h1>{title}</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
    </div>
  );
}

export default Page;
