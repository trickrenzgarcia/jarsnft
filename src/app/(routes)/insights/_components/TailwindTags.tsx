export function P(props: React.HTMLAttributes<HTMLParagraphElement>) {
  const { children } = props;
  return (
    <p className="my-2 leading-loose tracking-wide dark:text-gray-300 ">
      {children}
    </p>
  );
}
