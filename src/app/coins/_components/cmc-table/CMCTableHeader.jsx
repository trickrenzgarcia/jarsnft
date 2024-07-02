const styles = {
  textIcon: `flex items-center`,
};

const CMCTableHeader = () => {
  return (
    <tbody>
      <tr>
        <th></th>
        <th className="flex items-center">
          <b># </b>
        </th>
        <th>Name</th>
        <th>Price</th>
        <th>24h %</th>
        <th>7d %</th>
        <th>
          <div className={styles.textIcon}>
            <p className="mr-2">Market Cap</p>{" "}
          </div>
        </th>
        <th>
          <div className={styles.textIcon}>
            <p className="mr-2">Volume(24h)</p>{" "}
          </div>
        </th>
        <th>
          <div className={styles.textIcon}>
            <p className="mr-2">Circulating Supply</p>{" "}
          </div>
        </th>
        <th>Last 7 days</th>
      </tr>
    </tbody>
  );
};
export const DesktopTableHeader = () => {
  return (
    <tbody>
      <tr className="text-left">
        <th></th>
        <th className="flex items-center">
          <b># </b>
        </th>
        <th>
          <div className="ml-14 flex w-full">Name</div>
        </th>
        <th>Price</th>
        <th>{`24h / 7d change %`}</th>
        <th>Last 7 days</th>
      </tr>
    </tbody>
  );
};

export default CMCTableHeader;
