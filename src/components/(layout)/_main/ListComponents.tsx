type ListComponentProps<T> = {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

export default function ListComponents<T>({ data, renderItem }: ListComponentProps<T>) {
  return <div>{data.map((item, i) => renderItem(item, i))}</div>
}
