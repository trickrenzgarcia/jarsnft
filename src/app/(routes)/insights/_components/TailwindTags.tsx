export function P(props: React.HTMLAttributes<HTMLParagraphElement>) {
  const { children } = props;
  return (
    <p className="my-2 leading-loose tracking-wide dark:text-gray-300 ">
      {children}
    </p>
  );
}

export function Disclaimer(props: React.HTMLAttributes<HTMLParagraphElement>){
  const { children } = props;
  return (
    <p className="text-md mb-8 font-bold text-[#ec0000] underline dark:text-[#ce0000]">
      {children}
    </p>
  );
}

export function H1(props: React.HTMLAttributes<HTMLTitleElement>){
  const { children } = props;
  return (
    <h1 className="my-4 text-4xl font-bold md:text-5xl">
      {children}
    </h1>
  );
}

export function H2(props: React.HTMLAttributes<HTMLTitleElement>){
  const { children } = props;
  return (
    <h1 className="my-4 text-2xl font-bold">
      {children}
    </h1>
  );
}

export function H3(props: React.HTMLAttributes<HTMLTitleElement>){
  const { children } = props;
  return (
    <h1 className="my-4 text-xl font-bold">
      {children}
    </h1>
  );
}

export function IList(props: React.HTMLAttributes<HTMLUListElement>) {
  const { children } = props;
  return (
    <ul className="mb-12 ml-8 list-disc font-semibold leading-9 text-[#A519D7]">
      {children}
    </ul>
  );
}

export function H4(props: React.HTMLAttributes<HTMLTitleElement>) {
  const { children } = props;
  return (
    <h4 className="my-6 text-lg font-bold tracking-wider">
      {children}
    </h4>
  );
}

export function UL(props: React.HTMLAttributes<HTMLUListElement>) {
  const { children } = props;
  return (
    <ul className="space-y-4 mt-2 ml-14 list-disc leading-loose tracking-wide dark:text-gray-300">
      {children}
    </ul>
  );
}

export function OL(props: React.HTMLAttributes<HTMLOListElement>) {
  const { children } = props;
  return (
    <ol className="space-y-4 mt-2 ml-14 list-decimal leading-loose tracking-wide dark:text-gray-300">
      {children}
    </ol>
  );
}

