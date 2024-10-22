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

export function H1(props: React.HTMLAttributes<HTMLParagraphElement>){
  const { children } = props;
  return (
    <h1 className="mb-6 text-4xl font-bold md:text-5xl">
      {children}
    </h1>
  );
}

export function H2(props: React.HTMLAttributes<HTMLParagraphElement>){
  const { children } = props;
  return (
    <h1 className="my-6 text-2xl font-bold">
      {children}
    </h1>
  );
}

export function H3(props: React.HTMLAttributes<HTMLParagraphElement>){
  const { children } = props;
  return (
    <h1 className="my-6 text-xl font-bold">
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