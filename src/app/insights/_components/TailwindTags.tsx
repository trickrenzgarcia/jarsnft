export function P(props: React.HTMLAttributes<HTMLParagraphElement>) {
  const { children } = props;
  return (
    <p className="text-md mb-8 mt-3 leading-loose tracking-wide text-gray-300 ">
      {children}
    </p>
  );
}